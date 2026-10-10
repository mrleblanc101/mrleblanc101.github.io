# mrleblanc101.github.io

My personal website and blog, built with [Nuxt](https://nuxt.com/docs/getting-started/introduction) and Nuxt Content, and statically generated for GitHub Pages.

## Setup

Requires Node 24 (see `.nvmrc`) and pnpm (pinned in `package.json`, via Corepack):

```bash
nvm use
corepack enable
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
