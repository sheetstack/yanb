# NextJS Typescript Boilerplate

Bootstrap a developer-friendly NextJS app configured with:

- with-typescript-eslint-jest
  -  [Typescript](https://www.typescriptlang.org/)
  - Linting with [ESLint](https://eslint.org/)
  - Formatting with [Prettier](https://prettier.io/)
  - Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
  - Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)
- with-loading
  - Using `next/router` to identify different router events
  - Uses [nprogress](https://github.com/rstacruz/nprogress) as the loading indicator.
- analyze-bundles
  - Analyze the output bundles using [@next/bundle-analyzer](https://github.com/vercel/next.js/tree/master/packages/next-bundle-analyzer)
- with-google-analytics
  - A custom [\_document](https://nextjs.org/docs/advanced-features/custom-document) is used to inject [tracking snippet](https://developers.google.com/analytics/devguides/collection/gtagjs/) and track [pageviews](https://developers.google.com/analytics/devguides/collection/gtagjs/pages) and [event](https://developers.google.com/analytics/devguides/collection/gtagjs/events).
- with-next-seo
  - Integrate [next-seo](https://github.com/garmeeh/next-seo), a plugin to help manage your SEO in Next.js.
  - Use [next-seo.config.js](https://github.com/sheetstack/nextjs-boilerplate/blob/master/next-seo.config.js) as default SEO config
  - Use [pages/jsonld.tsx](https://github.com/sheetstack/nextjs-boilerplate/blob/master/pages/jsonld.tsx) for Google Search structured data
- swr-axios-typescript
  - Use [SWR](https://github.com/vercel/swr) for fast remote data fetching
  - Use [axios](https://github.com/axios/axios) to make HTTP request

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest)

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-typescript-eslint-jest with-typescript-eslint-jest-app
# or
yarn create next-app --example with-typescript-eslint-jest with-typescript-eslint-jest-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/vercel/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-typescript-eslint-jest
cd with-typescript-eslint-jest
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
