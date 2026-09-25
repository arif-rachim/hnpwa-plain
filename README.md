# hnpwa-plain

hnpwa-plain is an early starting point for a Hacker News reader in the style of the HNPWA (Hacker News Progressive Web Apps) project, written in plain JavaScript with no framework and no JavaScript build step. It was started in January 2018 to see how far native ES modules and template strings could go for building a component-style UI: each component is a function that returns an HTML string, and `app.js` joins the header, story list and footer into `document.body`. A small helper, `on.js`, gives components a lifecycle hook by tagging elements with a generated CSS class that plays a 1 ms animation, then listening for `animationstart` to know when the element has been inserted into the DOM. The list component uses that hook to fetch the first page of top stories from the HNPWA API and render each story. Styles are written in Sass and compiled with Gulp. It is aimed at developers curious about framework-free UI patterns, and it is an unfinished prototype.

> Initial commit from January 2018 and not developed further. There is no service worker or manifest yet, and the HNPWA API it calls (`hnpwa.com/api/v0`) no longer responds successfully, so the list stays empty today.

## Features

- Renders a header, a story list and a footer from template-string components
- Fetches `news.json?page=1` from the HNPWA API and shows rank, title, domain, points, author, age and comment count for each story
- `on.js` helper that runs a component's `create` callback when its element is inserted into the DOM (detected through a CSS `animationstart` event)
- Styles written in Sass and compiled to `css/app.css`

## Tech stack

JavaScript (ES modules) · Sass · Gulp 3 · gulp-autoprefixer · Browsersync

## Development

```bash
npm install
npx gulp          # starts Browsersync on the project root, recompiles Sass and reloads on changes
npx gulp sass     # compile sass/ to css/ once
```

Gulp 3 only runs on old Node.js versions (roughly Node 10 or earlier). Since the page uses no build step for JavaScript, any static file server pointed at the project root also works.

## Project layout

```
index.html                 entry page
scripts/app.js             composes header, main and footer
scripts/on.js              DOM-insertion binding helper
scripts/component/         header, footer, main (fetch + list), record (one story)
sass/app.scss              styles (compiled to css/app.css)
gulpfile.js                sass and browser-sync tasks
```

## License

MIT (as declared in `package.json`)
