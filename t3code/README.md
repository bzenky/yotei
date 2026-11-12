# Yotei for T3 Code

Yotei, Yotei Midnight, and Yotei Dawn are available in T3 Code through
[Open VSX](https://open-vsx.org/extension/Zenky/yotei). T3 Code imports the
same theme files used by the VS Code extension:

| Variant | Appearance | Theme file |
| --- | --- | --- |
| Yotei | Dark | [yotei-color-theme.json](../visual-studio-code/themes/yotei-color-theme.json) |
| Yotei Midnight | Dark | [yotei-midnight-color-theme.json](../visual-studio-code/themes/yotei-midnight-color-theme.json) |
| Yotei Dawn | Light | [yotei-dawn-color-theme.json](../visual-studio-code/themes/yotei-dawn-color-theme.json) |

T3 Code converts VS Code colors into its own app palette. The result can
differ from VS Code, and this package does not change T3 Code's layout.
See [T3 Code's appearance documentation](https://github.com/pingdotgg/t3code/blob/main/docs/user/appearance.md).

## Install through theme search

1. In T3 Code on web or desktop, open **Settings → Appearance**.
2. Open the theme import dialog and search for **Yotei**.
3. Choose **Yotei Theme** by **Zenky** (`Zenky.yotei`) from Open VSX.
4. Import Yotei, Yotei Midnight, and Yotei Dawn, then select the variant you
   want for its corresponding light or dark appearance.

## Install from a file

Use this method to import a variant directly:

1. Download a theme JSON file from the table above. On GitHub, open the file
   and use **Download raw file**.
2. In T3 Code on web or desktop, open **Settings → Appearance**.
3. Choose the theme import option and import the downloaded JSON file.
4. Select the imported theme for its corresponding light or dark appearance.
5. Repeat for the other variants you want to use.

## Publish to Open VSX

Publish the existing extension in `visual-studio-code/`; it contains all
three variants. Keep its `Zenky.yotei` extension ID so the same package can
serve both VS Code and T3 Code.

### Set up the publisher account

Follow the [Open VSX publishing guide](https://github.com/eclipse-openvsx/openvsx/wiki/Publishing-Extensions):

1. Sign in to [Open VSX](https://open-vsx.org/) with GitHub.
2. Link your Eclipse account and accept the publisher agreement.
3. Generate an access token under your Open VSX account settings.
4. Set `OVSX_PAT` in your local environment or CI secret store. Keep the token
   out of Git and command history.
5. Create the `Zenky` namespace if it does not already exist:

   ```sh
   npx --yes ovsx@1.4.0 create-namespace Zenky
   ```

If the namespace belongs to another publisher, resolve access with Open VSX
before publishing. Do not rename the existing VS Code publisher to work
around a namespace conflict.

### Verify namespace ownership

The `Zenky` namespace is now verified. For a new publisher namespace that
also exists in another gallery, Open VSX can keep an uploaded extension
inactive until ownership is verified. A successful CLI upload alone does
not confirm public availability.

If this happens, open **Settings → Extensions** on Open VSX, open the
extension, and choose **Claim Ownership**. Follow the
[namespace claim process](https://github.com/eclipse-openvsx/openvsx/wiki/Namespace-Access)
and provide the existing Marketplace listing and source repository as
evidence. Check the public listing and theme search after approval.

### Build and publish

Use Node.js 22.12 or newer. From the repository root:

```sh
cd visual-studio-code
npm run package
```

The command creates `yotei-1.3.0.vsix` for the current package version.
Review the package, then publish that exact artifact with `OVSX_PAT` set:

```sh
npx --yes ovsx@1.4.0 publish ./yotei-1.3.0.vsix
```

For subsequent releases, update the package version and changelog, then
rebuild and publish the new artifact. Open VSX does not allow overwriting
an existing release. Alternatively, `npm run publish:openvsx` packages and
publishes the current source in one step.

After publishing, check the [Open VSX listing](https://open-vsx.org/extension/Zenky/yotei),
then search for Yotei in T3 Code and check each variant's app surfaces,
text, selections, diffs, and terminal. Packaging alone does not verify how
the converted theme looks in the running app.
