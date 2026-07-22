import { readFile } from "node:fs/promises";

type TokenColor = {
  name?: string;
  scope?: string | string[];
  settings?: {
    foreground?: string;
    fontStyle?: string;
  };
};

type VSCodeTheme = {
  name: string;
  type: "dark" | "light";
  colors: Record<string, string>;
  tokenColors: TokenColor[];
};

type ShikiTokenColor = {
  name?: string;
  scope?: string | string[];
  settings: {
    foreground?: string;
    background?: string;
    fontStyle?: string;
  };
};

type ShikiTheme = {
  name: string;
  type: "dark" | "light";
  colors: Record<string, string>;
  settings: ShikiTokenColor[];
  fg: string;
  bg: string;
};

export type PreviewTheme = {
  name: string;
  slug: string;
  type: "dark" | "light";
  source: string;
  colors: VSCodeTheme["colors"];
  tokenColors: TokenColor[];
  syntax: Record<string, string>;
  palette: Array<{
    name: string;
    value: string;
  }>;
  shikiTheme: ShikiTheme;
};

const themeFiles = [
  {
    source: "Visual Studio Code",
    path: new URL("../../../visual-studio-code/themes/yotei-color-theme.json", import.meta.url)
  },
  {
    source: "Visual Studio Code",
    path: new URL("../../../visual-studio-code/themes/yotei-midnight-color-theme.json", import.meta.url)
  }
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function findToken(theme: VSCodeTheme, scopes: string[]) {
  for (const token of theme.tokenColors) {
    const tokenScopes = Array.isArray(token.scope) ? token.scope : [token.scope];
    if (
      token.settings?.foreground &&
      tokenScopes.some((scope) => scope && scopes.some((target) => scope.includes(target)))
    ) {
      return token.settings.foreground;
    }
  }

  return theme.colors["editor.foreground"];
}

function buildSyntax(theme: VSCodeTheme) {
  return {
    foreground: theme.colors["editor.foreground"],
    comment: findToken(theme, ["comment"]),
    keyword: findToken(theme, ["keyword", "storage.type"]),
    string: findToken(theme, ["string"]),
    function: findToken(theme, ["entity.name.function", "support.function"]),
    type: findToken(theme, ["support.type", "entity.name"]),
    constant: findToken(theme, ["constant.numeric", "constant.language"]),
    attribute: findToken(theme, ["entity.other.attribute-name"]),
    tag: findToken(theme, ["entity.name.tag"])
  };
}

function buildShikiTheme(theme: VSCodeTheme): ShikiTheme {
  return {
    name: theme.name,
    type: theme.type,
    colors: theme.colors,
    settings: theme.tokenColors.map((token) => ({
      name: token.name,
      scope: token.scope,
      settings: token.settings ?? {}
    })),
    fg: theme.colors["editor.foreground"],
    bg: theme.colors["editor.background"]
  };
}

function buildPalette(theme: VSCodeTheme) {
  const preferredKeys = [
    "editor.background",
    "editor.foreground",
    "editor.selectionBackground",
    "sideBar.background",
    "titleBar.activeBackground",
    "tab.activeForeground",
    "focusBorder",
    "button.background",
    "terminal.ansiRed",
    "terminal.ansiGreen",
    "terminal.ansiBlue",
    "terminal.ansiMagenta",
    "terminal.ansiCyan",
    "terminal.ansiYellow"
  ];

  return preferredKeys
    .filter((name) => theme.colors[name])
    .map((name) => ({
      name,
      value: theme.colors[name]
    }));
}

export async function getThemes(): Promise<PreviewTheme[]> {
  const themes = await Promise.all(
    themeFiles.map(async (themeFile) => {
      const theme = JSON.parse(await readFile(themeFile.path, "utf-8")) as VSCodeTheme;

      return {
        name: theme.name,
        slug: slugify(theme.name),
        type: theme.type,
        source: themeFile.source,
        colors: theme.colors,
        tokenColors: theme.tokenColors,
        syntax: buildSyntax(theme),
        palette: buildPalette(theme),
        shikiTheme: buildShikiTheme(theme)
      };
    })
  );

  return themes;
}

export async function getTheme(slug: string) {
  const themes = await getThemes();
  return themes.find((theme) => theme.slug === slug);
}
