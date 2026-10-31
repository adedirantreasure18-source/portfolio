# Adediran Kindness — Portfolio

A single-page, dependency-free portfolio site. No build step, no framework, no
package manager. Open `index.html` and it works.

## Files

```
index.html                      the whole page
styles.css                      all styling (design tokens at the top)
script.js                       scroll reveal, nav highlighting, screenshot lightbox
assets/                         screenshots + résumé PDF
  Adediran-Kindness-Resume.pdf  served by the "Résumé" buttons
  workdeck-*.jpg                captured from the running WorkDeck app
  amalahey-*.jpg                captured from the running Amala Hey app
  ovenfresh-home.jpg            captured from the running Oven Fresh app
```

## Editing

- **Copy** lives directly in `index.html`. Each project is one `<article class="project">`.
- **Colours and type** are CSS variables at the top of `styles.css`
  (`--ink`, `--paper`, `--amber`, fonts).
- **Links**: email, GitHub, LinkedIn and phone appear in the hero and the contact
  section. The LinkedIn URL is taken from the résumé (`linkedin.com/in/adediran-kindness-63480440b`).
- **Screenshots**: replace the JPGs in `assets/` keeping the same filenames. They are
  1440×900. The thumbnail strip under WorkDeck uses the same files.

## Local preview

```bash
python -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly also works; only the webfonts need a connection.

## Deploy

Any static host. Three options, in order of effort:

**Netlify (drag and drop)** — app.netlify.com → Sites → drag the whole
`Kindness-Portfolio` folder onto the page. Done. Add a custom domain in
Site settings → Domain management.

**GitHub Pages** — create a repo, push this folder to `main`, then
Settings → Pages → Source: `main` / root. The site appears at
`https://<username>.github.io/<repo>/`.

**Vercel** — `npx vercel` from this folder, framework preset "Other".

## Notes

- Screenshots were taken from the actual applications running locally at 1440×900,
  with the Next.js dev indicator hidden. Nothing is mocked up.
- WorkSynch is shown as an architecture diagram rather than a screenshot because
  the app is auth-gated.
- All project facts come from the résumé plus the source of each project. No metrics
  or client names were invented.

## Optional next steps

- Add a live demo link per project if/when deployed publicly.
- Add a `favicon.ico` / social preview image (`og.jpg`) — see `<meta property="og:*">`.
- Swap in a professional portrait in the About section if you want a face on the page.
