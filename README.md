# is-Canada Frontend (Headless WordPress + Next.js)

This repository now uses a single Next.js frontend source at the repository root.

WordPress is only used as CMS. The frontend UI is fully controlled by Next.js.
The `app/public/wp-content/themes/is-canada` folder is a minimal placeholder theme for headless mode.

## Stack

- CMS: WordPress (LocalWP)
- Plugins: ACF, WPGraphQL, WPGraphQL for ACF
- Frontend: Next.js App Router + TypeScript + Tailwind CSS
- Data transport: GraphQL (`graphql-request`)

## Environment Variables

Create `.env.local` in this directory:

```bash
NEXT_PUBLIC_WP_GRAPHQL_URL=http://is-canada-cms.local/graphql
NEXT_PUBLIC_HOME_URI=/home/
```

Compatibility note:
- `NEXT_PUBLIC_WORDPRESS_API_URL` is still supported as a fallback.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Folder Structure (single frontend source)

```text
is-canada/
├── app/
│   ├── page.tsx               # Home page (ACF + fallback)
│   ├── layout.tsx
│   └── posts/[slug]/page.tsx  # Post detail
├── app/public/                # WordPress files (CMS runtime)
├── lib/
│   ├── graphql-client.ts
│   ├── queries.ts
│   └── types.ts
├── public/
├── package.json
└── next.config.ts
```

## ACF Querying Convention

Current homepage query expects the ACF field group GraphQL field name:

- `homePageTest`

Example query:

```graphql
query GetHomePageWithAcf($uri: String!) {
  pageBy(uri: $uri) {
    id
    title
    uri
    homePageTest {
      heroTitle
      heroSubtitle
      ctaButtonText
    }
  }
}
```

If this field name is different in WordPress, update `lib/queries.ts`.

## Build and Deploy

### Option A (recommended for production): split runtime

Run WordPress and Next.js as two services:

- WordPress: PHP/Nginx/Apache hosting CMS and `/graphql`
- Next.js: Node runtime (`npm run build && npm run start`)

This is the cleanest headless architecture and easiest to scale.

### Option B (static export only for fully static pages)

Use `next export` style deployment only if pages do not require server rendering, auth, or dynamic server features.

## Troubleshooting

- GraphQL works but ACF fields fail:
  - Ensure ACF field group has `Show in GraphQL = true`
  - Ensure field group GraphQL field name matches `homePageTest`
- `pageBy(uri: ...)` returns null:
  - Confirm page exists and is published
  - Confirm `NEXT_PUBLIC_HOME_URI` matches exact URI in WordPress
- Network errors:
  - Confirm LocalWP site URL is reachable from your Next.js runtime
