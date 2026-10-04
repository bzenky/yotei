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

Yotei, Yotei Midnight, and Yotei Dawn are available in Kitty's public theme
collection. No manual download or Kitty update is needed.

Inside Kitty, refresh the collection and open the theme selector:

```sh
kitten themes --cache-age 0
```

Search for **Yotei**, choose a variant, and follow the prompts to apply it.
The refresh makes new themes available immediately; normally Kitty checks
for collection updates once a day.

You can also apply a variant directly:

```sh
kitten themes --cache-age 0 --reload-in=all "Yotei"
```

Replace `Yotei` with `Yotei Midnight` or `Yotei Dawn` to switch variants.

## Install local files

To try or customize the files from this repository, copy them into your Kitty
configuration's `themes/` directory.

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

Choose one of the copied themes to apply your local version.

## Install with an include

After copying the files as above, add one include to your `kitty.conf`:

```conf
include themes/Yotei.conf
```

Use `themes/Yotei Midnight.conf` or `themes/Yotei Dawn.conf` for another variant.
Place the include after any other color settings so Yotei takes precedence.
Restart Kitty to apply it.

## Public theme collection

All three variants are published in
[`kovidgoyal/kitty-themes`](https://github.com/kovidgoyal/kitty-themes), following
the merge of [the Yotei submission](https://github.com/kovidgoyal/kitty-themes/pull/202).
The collection updates independently of Kitty releases.

See Kitty's [theme instructions](https://sw.kovidgoyal.net/kitty/kittens/themes/)
and [color configuration reference](https://sw.kovidgoyal.net/kitty/conf/#color-scheme).
