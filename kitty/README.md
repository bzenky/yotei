# Yotei for Kitty

A purple-red dawn palette for Kitty, with three variants:

| Theme | File | Appearance |
| --- | --- | --- |
| Yotei | [`yotei.conf`](yotei.conf) | Original dark palette |
| Yotei Midnight | [`yotei-midnight.conf`](yotei-midnight.conf) | Deeper dark palette |
| Yotei Dawn | [`yotei-dawn.conf`](yotei-dawn.conf) | Soft light palette |

Each theme includes terminal text, background, cursor, selection, all 16 ANSI
colors, tabs, and window borders. Terminal palettes match the corresponding
[VS Code variants](../visual-studio-code/themes/).

## Install with the theme selector

Run these commands from the root of this repository:

```sh
mkdir -p ~/.config/kitty/themes
cp kitty/yotei.conf ~/.config/kitty/themes/"Yotei.conf"
cp kitty/yotei-midnight.conf ~/.config/kitty/themes/"Yotei Midnight.conf"
cp kitty/yotei-dawn.conf ~/.config/kitty/themes/"Yotei Dawn.conf"
```

If your Kitty configuration uses a different directory, use its `themes/`
subdirectory instead.

Inside Kitty, run:

```sh
kitten themes
```

Search for **Yotei**, choose a variant, and follow the prompts to apply it.
You can also apply a variant directly:

```sh
kitten themes --reload-in=all "Yotei"
```

Replace `Yotei` with `Yotei Midnight` or `Yotei Dawn` to switch variants.

## Install with an include

After copying the files as above, add one include to your `kitty.conf`:

```conf
include themes/Yotei.conf
```

Use `themes/Yotei Midnight.conf` or `themes/Yotei Dawn.conf` for another variant.
Place the include after any other color settings so Yotei takes precedence.
Restart Kitty to apply it.

## Public theme collection

These files are available locally and have not been submitted to the public
Kitty theme collection. Kitty accepts theme contributions through pull requests
to [`kovidgoyal/kitty-themes`](https://github.com/kovidgoyal/kitty-themes).

See Kitty's [theme instructions](https://sw.kovidgoyal.net/kitty/kittens/themes/)
and [color configuration reference](https://sw.kovidgoyal.net/kitty/conf/#color-scheme).
