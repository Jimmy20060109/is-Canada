<<<<<<< HEAD
# is-Canada Frontend (Headless WordPress + Next.js)

This Next.js app is intentionally stored inside the WordPress theme directory:

`app/public/wp-content/themes/is-canada`

WordPress is only used as CMS. The frontend UI is fully controlled by Next.js.

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

## Folder Structure (theme scoped frontend)

```text
is-canada/
├── app/
│   ├── page.tsx               # Home page (ACF + fallback)
│   ├── layout.tsx
│   └── posts/[slug]/page.tsx  # Post detail
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

### Option C (keep frontend in theme folder)

Code location inside the theme is fine for repository organization, but deployment should still treat Next.js as an app build artifact:

1. Build in `wp-content/themes/is-canada`
2. Deploy `.next`, `public`, `package.json`, lockfile, and runtime dependencies
3. Start with `npm run start` behind reverse proxy

## Troubleshooting

- GraphQL works but ACF fields fail:
  - Ensure ACF field group has `Show in GraphQL = true`
  - Ensure field group GraphQL field name matches `homePageTest`
- `pageBy(uri: ...)` returns null:
  - Confirm page exists and is published
  - Confirm `NEXT_PUBLIC_HOME_URI` matches exact URI in WordPress
- Network errors:
  - Confirm LocalWP site URL is reachable from your Next.js runtime
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> ed0cd2101aeaa540f501bb7a6a53dc0c2bc0ea35
