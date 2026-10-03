# Yotei for Zed

A theme inspired by a purple-red sky at dawn, with three variants:

- **Yotei**: the original warm purple palette.
- **Yotei Midnight**: deeper backgrounds with the original accents.
- **Yotei Dawn**: soft light backgrounds with warm accents.

The themes cover Zed's interface, syntax highlighting, and integrated terminal.
Their palettes come from the corresponding [VS Code themes](../visual-studio-code/themes/).
Syntax colors are mapped to Zed's highlight categories; language-specific
TextMate rules do not have a direct equivalent in Zed.

## Install locally

This extension has not yet been published to Zed's extension registry.

1. Clone or download this repository.
2. Open the command palette in Zed and run **zed: install dev extension**.
3. Select this repository's `zed/` directory, which contains `extension.toml`.
4. Run **theme selector: toggle** and choose **Yotei**, **Yotei Midnight**, or
   **Yotei Dawn**.

See Zed's [local extension instructions](https://zed.dev/docs/extensions/developing-extensions)
for troubleshooting.

## Publish to the extension registry

Zed publishes extensions after accepting a pull request to
[`zed-industries/extensions`](https://github.com/zed-industries/extensions).
This repository can host the extension in its `zed/` subdirectory.

1. Test all three variants inside Zed. Check editor text, syntax colors, the
   project panel, tabs, menus, search, selections, diagnostics, and terminal
   colors. Test the exact commit you plan to submit.
2. Commit and push the extension to a branch in the public Yotei repository.
3. Fork and clone `zed-industries/extensions` to your personal GitHub account.
4. Add the Yotei repository as a submodule:

   ```sh
   git submodule add https://github.com/bzenky/yotei.git extensions/yotei-theme
   ```

5. Check out the tested commit in that submodule. The commit must exist on a
   public branch of the Yotei repository.
6. Add this entry to the registry's top-level `extensions.toml`:

   ```toml
   [yotei-theme]
   submodule = "extensions/yotei-theme"
   path = "zed"
   version = "0.1.0"
   ```

7. Run `pnpm sort-extensions` in the registry checkout, commit the registry
   changes, and open a pull request to `zed-industries/extensions`.

The registry version must match `zed/extension.toml` at the submitted commit.
Before submission, confirm the extension ID is available and review Zed's
[publishing prerequisites](https://zed.dev/docs/extensions/publishing/prerequisites),
[license requirements](https://zed.dev/docs/extensions/publishing/license-requirements), and
[publishing guide](https://zed.dev/docs/extensions/publishing/publishing-guide).
This extension includes the project's MIT license in `zed/LICENSE`.

Once the pull request is accepted and merged, Zed packages and publishes the
extension. Users can then find **Yotei Theme** in Zed's **Extensions** page.
