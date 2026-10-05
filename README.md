# Beauty Dynastya

Website of the international online beauty championship **Beauty Dynastya**.
Static site: HTML + CSS + vanilla JS, no build step.

## Languages

| Language | Page |
| --- | --- |
| English | `index.html` |
| Русский | `ru/index.html` |
| Italiano | `it/index.html` |
| Deutsch | `de/index.html` |
| Français | `fr/index.html` |

All pages share `css/style.css`, `js/main.js` and `images/`.

## Structure

```
├── index.html
├── ru/  it/  de/  fr/      language versions
├── css/style.css
├── js/main.js              burger menu, judges filter, photo fallback, year
└── images/
    ├── logo.png            site logo
    ├── favicon.png         tab icon
    └── posters/            judges, speakers, participants, sponsor
```

## Adding a judge

1. Put the poster into `images/posters/` (JPG, 800px wide).
2. Copy any `<li class="judge">` card in **every** language page and change name, role, country, Instagram.
3. `data-category` must be one of: `lash`, `pmu`, `brows`, `lamination`, `nails`, `hair` — the filter uses it.
4. Update the judges / countries numbers in the “About” block.

## Deploy (GitHub Pages)

Settings → Pages → Source: branch `main`, folder `/ (root)` → Save.
