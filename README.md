# Prudent Mobile Tires

A five-page mobile tire service website with forest green, cream and gold styling. Built with React 19, TypeScript and CSS, bundled with esbuild.

## Pages

- **Home** — mobile tire service, at-home and highway assistance, prominent call links.
- **About** — company introduction and approach to service.
- **Services** — roadside assistance, at-home tire care, tire repair and replacement, expandable FAQs.
- **Portfolio** — filterable service gallery.
- **Contact** — two large tap-to-call numbers, address and directions.

## Contact

- **470 861-8892**
- **470 422-7089**
- **2059 Candler Rd., Decatur, GA 30032**
- **24-hour availability**

## Build

Install Node.js 20 or later, then run:

```sh
npm ci
npm run build
```

The generated website is in `dist/`. Upload that directory to a static web host, or connect this GitHub repository to your preferred host using:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `dist` |

The output contains five HTML pages and their assets. No database or server-side application is required. Phone links open the visitor's calling app. Directions open Google Maps. There is no enquiry form or payment collection.

## Local preview

After building, serve `dist` with a static HTTP server, for example:

```sh
python3 -m http.server 8080 --directory dist
```

Then visit `http://localhost:8080`.

## Edit

- `src/main.tsx` — page layouts, text, contact details and interactions.
- `src/style.css` — colors, typography and responsive layouts.
- `public/assets/` — custom logo and service photographs.
- `build.mjs` — creates the production bundle and HTML entry points.

Google Fonts supplies the display and body typefaces, with local font fallbacks. The phone numbers and address are also used in the generated page descriptions in `build.mjs`; update both files if contact details change.

## Custom domain

You can keep your domain registered with Cloudflare. Add the domain to your selected hosting provider and follow that provider's instructions to add the exact required DNS records in Cloudflare. Domain configuration is a separate step and is not included in this source upload.

This repository is independent of the initial ChatGPT Sites preview and contains no hosting account credentials or ChatGPT project configuration.

## Push this folder to GitHub

After extracting the ZIP, open a terminal inside the `prudentmobiletires` folder. For the currently empty repository, run:

```sh
git init
git add .
git commit -m "Add Prudent Mobile Tires website"
git branch -M main
git remote add origin https://github.com/rabeshi/prudentmobiletires.git
git push -u origin main
```

Sign in using your normal GitHub authentication when prompted. Do not paste passwords or access tokens into the source files. If the repository already has commits when you upload, clone it first and copy these files into that clone instead of overwriting its history.
