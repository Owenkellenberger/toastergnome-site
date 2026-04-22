# toastergnome.com

Music portfolio site for Owen Kellenberger / Toastergnome. Next.js 14 App Router, TypeScript, Tailwind.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content

Projects live in [`content/projects.json`](./content/projects.json). Add/remove entries there — each needs `title`, `image`, `description`, and a `links` object with any of `spotify`, `youtube`, `apple`, `soundcloud`, `amazon`.

Place artwork in `public/images/projects/` matching the path referenced in JSON. See the README in that directory for filenames.

The logo goes at `public/images/logo.png`.

## Contact form

The form POSTs to a Formspree endpoint. Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in Vercel env vars (e.g. `https://formspree.io/f/xxxxxxxx`). Without it, submissions show an error message with the fallback email.

## Deploy

Vercel-ready. Push to GitHub, import the repo in Vercel, and point `toastergnome.com` at the project.

## Build

```bash
npm run build
```
