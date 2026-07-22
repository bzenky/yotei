import chromeManifest from "../../../google-chrome/manifest.json";
import firefoxManifest from "../../../firefox/manifest.json";
import terminalTheme from "../../../windows-terminal/theme.json";

export type ApplicationTheme = {
  name: string;
  slug: string;
  category: "editor" | "browser" | "terminal" | "chat";
  description: string;
  installPath: string;
  colors: Record<string, string>;
  storeUrl?: string;
  values?: string;
};

type ChromeColor = number[];

type ChromeManifest = {
  theme: {
    colors: Record<string, ChromeColor>;
  };
};

type FirefoxManifest = {
  theme: {
    colors: Record<string, string>;
  };
};

type TerminalTheme = Array<Record<string, string>>;

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function rgbToHex(value: ChromeColor) {
  const [red, green, blue] = value;
  return `#${[red, green, blue]
    .map((channel) => Math.round(channel).toString(16).padStart(2, "0"))
    .join("")}`;
}

function rgbaToHex(value: string) {
  const match = value.match(/rgba?\(([^)]+)\)/i);

  if (!match) {
    return value;
  }

  const [red, green, blue] = match[1].split(",").map((part) => Number.parseFloat(part.trim()));
  return rgbToHex([red, green, blue]);
}

const chromeColors = (chromeManifest as ChromeManifest).theme.colors;
const firefoxColors = (firefoxManifest as FirefoxManifest).theme.colors;
const terminalColors = (terminalTheme as TerminalTheme)[0];

export const applications: ApplicationTheme[] = [
  {
    name: "Visual Studio Code",
    slug: "visual-studio-code",
    category: "editor",
    description: "The original editor theme with full UI and syntax colors.",
    installPath: "visual-studio-code/",
    colors: {
      background: "#211925",
      foreground: "#FEF7FF",
      accent: "#FD4200",
      secondary: "#CC65FF"
    }
  },
  {
    name: "Google Chrome",
    slug: slugify("Google Chrome"),
    category: "browser",
    description: "Browser frame, toolbar, tab text, and new tab colors.",
    installPath: "google-chrome/",
    storeUrl: "https://chromewebstore.google.com/detail/yotei/joafbehmencjimojljfchmmenokidfef",
    colors: {
      frame: rgbToHex(chromeColors.frame),
      toolbar: rgbToHex(chromeColors.toolbar),
      tabText: rgbToHex(chromeColors.tab_text),
      tabBackgroundText: rgbToHex(chromeColors.tab_background_text),
      bookmarkText: rgbToHex(chromeColors.bookmark_text),
      ntpText: rgbToHex(chromeColors.ntp_text)
    }
  },
  {
    name: "Firefox",
    slug: slugify("Firefox"),
    category: "browser",
    description: "Firefox frame, toolbar, bookmark, and active tab colors.",
    installPath: "firefox/",
    storeUrl: "https://addons.mozilla.org/pt-BR/firefox/addon/yotei",
    colors: {
      frame: rgbaToHex(firefoxColors.frame),
      toolbar: rgbaToHex(firefoxColors.toolbar),
      tabText: rgbaToHex(firefoxColors.bookmark_text),
      tabBackgroundText: rgbaToHex(firefoxColors.tab_background_text),
      field: rgbaToHex(firefoxColors.toolbar_field),
      accent: rgbaToHex(firefoxColors.tab_line)
    }
  },
  {
    name: "Windows Terminal",
    slug: slugify("Windows Terminal"),
    category: "terminal",
    description: "Terminal foreground, background, cursor, selection, and ANSI palette.",
    installPath: "windows-terminal/",
    colors: {
      background: terminalColors.background,
      foreground: terminalColors.foreground,
      cursor: terminalColors.cursorColor,
      selection: terminalColors.selectionBackground,
      red: terminalColors.red,
      green: terminalColors.green,
      blue: terminalColors.blue,
      purple: terminalColors.purple,
      cyan: terminalColors.cyan,
      yellow: terminalColors.yellow
    }
  },
  {
    name: "Slack",
    slug: slugify("Slack"),
    category: "chat",
    description: "Slack sidebar theme values ready to paste into Slack preferences.",
    installPath: "slack/",
    values: "#211925,#4D4352,#CC65FF,#B45BCF",
    colors: {
      columnBg: "#211925",
      menuBgHover: "#4D4352",
      activeItem: "#CC65FF",
      activeText: "#B45BCF"
    }
  }
];
