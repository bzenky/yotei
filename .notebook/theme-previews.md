# Theme previews
> Build-time palettes and syntax, browser-side preview selection

Entry: `site/src/pages/index.astro` — homepage variant buttons; pre-renders all variants and samples using Shiki. Switching preserves the active sample and updates the full-preview link.
Source: `site/src/lib/themes.ts:getThemes()` → three JSON files in `visual-studio-code/themes/`; palette, UI colors, Shiki themes derived from source.
Editor: `site/src/components/ThemePreview.astro` — per-instance CSS variables; sample buttons, panels, and breadcrumb scoped to each preview root.
Detail pages: `site/src/pages/themes/[slug].astro` — static page per variant; fixed palette, sample tabs.
Styling: `site/src/styles/global.css` — variant picker, preview shell, responsive editor.
Validation: run `npm run build` in `site/` (Astro check + static build).

Updated: 2026-11-16
