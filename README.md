# Aneesh Mokashi Portfolio

Static personal portfolio for `aneeshkm.github.io`.

Content is maintained in React source files under `src/`, then generated to plain static HTML in `dist/`.
Project records live in `src/data/projects/*.yml`; every project page uses the same React template in `src/render-static.jsx`.

## Local Preview

```sh
corepack pnpm run dev
```

## Regenerate HTML

```sh
corepack pnpm run generate
```

The repeated HTML in `dist/` is build output. Edit `src/data/projects/*.yml`, `src/site-data.js`, and `src/render-static.jsx` instead.

## Checks And Deploy Output

```sh
corepack pnpm run check
corepack pnpm run build
```
