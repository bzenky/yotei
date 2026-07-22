export type CodeSample = {
  label: string;
  language: string;
  filename: string;
  code: string;
};

export const samples: CodeSample[] = [
  {
    label: "TypeScript",
    language: "ts",
    filename: "theme-preview.ts",
    code: `type Theme = {
  name: string;
  accent: string;
  previewable: boolean;
};

const yotei: Theme = {
  name: "Yotei",
  accent: "#FD4200",
  previewable: true
};

export function describe(theme: Theme) {
  return \`\${theme.name} glows at dawn.\`;
}`
  },
  {
    label: "Astro",
    language: "astro",
    filename: "ThemeCard.astro",
    code: `---
const { name, accent } = Astro.props;
---

<article class="theme-card" style={\`--accent: \${accent}\`}>
  <p>Featured theme</p>
  <h2>{name}</h2>
  <a href={\`/themes/\${name.toLowerCase()}\`}>Preview</a>
</article>`
  },
  {
    label: "Rust",
    language: "rust",
    filename: "palette.rs",
    code: `#[derive(Debug)]
struct Color<'a> {
    name: &'a str,
    value: &'a str,
}

fn main() {
    let accent = Color {
        name: "sunrise",
        value: "#FD4200",
    };

    println!("{:?}", accent);
}`
  },
  {
    label: "JSON",
    language: "json",
    filename: "theme.json",
    code: `{
  "name": "Yotei",
  "type": "dark",
  "colors": {
    "editor.background": "#211925",
    "editor.foreground": "#FEF7FF",
    "focusBorder": "#FD4200"
  }
}`
  },
  {
    label: "Markdown",
    language: "md",
    filename: "README.md",
    code: `# Yotei

A **dark theme** inspired by a purple/red sky at dawn.

- Editor UI preview
- Syntax highlighting
- Terminal palette

> Built to feel warm, calm, and sharp.`
  }
];
