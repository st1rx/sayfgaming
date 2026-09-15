# SAYF Gaming

The website for **Sorry About Your Face** — a gaming community born in EVE Online in 2012.

Live at <https://st1rx.github.io/sayfgaming/>

Plain HTML and CSS, no build step. Edit a file, push to `main`, and GitHub Pages redeploys in about a minute.

## Moving to a custom domain

Three things reference the current URL and need updating together:

1. `404.html` — the `<base href>` becomes `/`
2. `index.html` and `join.html` — the `canonical`, `og:url` and `og:image` tags
3. Add a `CNAME` file containing the domain, then set it under **Settings → Pages**
