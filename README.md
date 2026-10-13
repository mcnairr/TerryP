# TerryP

Terry Pickett's website, migrated from WordPress.com to static HTML on GitHub Pages.

There is no build step: every page is a plain `index.html` that can be edited by hand.

## Layout

| Path | Contents |
| --- | --- |
| `index.html` | Home: "Remembering Terry Pickett" and the remembrances left by visitors |
| `blog/` | Wood Working Gallery and one folder per project |
| `2013/11/13/why-i-like-baseball/` | Blog post |
| `2025/01/26/terry-and-kates-storycorps-interview/` | StoryCorps interview with audio player |
| `terry-pickett-associates/` | Consulting business pages |
| `audio/` | StoryCorps interview as MP3 (128 kbps, converted from the original 395 MB WAV) |
| `images/` | Photos resized to 1600px max; `images/thumbs/` holds the 600px gallery thumbnails |
| `css/style.css` | All styling (supports light and dark mode) |
| `js/lightbox.js` | Click-to-enlarge photo viewer for galleries |

URLs match the old WordPress site, so existing links keep working once the domain points here.

Links between pages are relative, so the site works both at `https://<user>.github.io/TerryP/` and on a custom domain.

## Publishing

In the repository's **Settings → Pages**, set the source to "Deploy from a branch", branch `main`, folder `/ (root)`.

To serve it at terrypickett.com, enter the domain under **Settings → Pages → Custom domain**, then point the domain's DNS at GitHub Pages (see GitHub's "Managing a custom domain" docs).
