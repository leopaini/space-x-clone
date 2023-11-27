# SpaceX Clone App

This project is a clone of the SpaceX site, it's for educational and non-commercial purposes.
It's using the [SpaceX GraphQL API](https://github.com/apollographql/spacex) which is a recreation of the SpaceXLand/api project. The code for this recreation is open source.

## Demo link:

Access the site at [Vercel](https://spacex-clone-sigma.vercel.app)

## Table of Content:

- [About The App](#about-the-app)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [State Management](#state-management)
- [Assumptions](#assumptions)
- [Technical Debt](#technical-debt)
- [License](#license)

## About The App

This is an app that integrates the GraphQL API and fetches 4 launches made by Space X. If you want to see more launches you can click on the button "Load More" and that fetches 4 more launches to the UI.
Eventually, if you click on a launch, it takes you to a page where it shows you more details.

## Technologies

I used `React`, `Next.js`, `Typescript` and `Apollo-Client` as the main technologies.

## Setup

Download or clone the repository, then on the folder do

```bash
npm install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Approach

Thinking about a project that could scale, I decided to use `Apollo Client` and `Next.js`.

`Apollo Client` provides a powerful cache system that allows you to manage the state of your application and access data quickly without having to make a network request. When you use `Apollo Client` to make a `GraphQL` query, the results are automatically stored in the cache, making subsequent requests for the same data much faster.

To achieve **SSR/SSG/ISR** in a `Next.js` app, you can make a network request on the server using `Apollo Client` and pre-populate the cache with the data. This allows the data to be immediately available on the client side, without the need for additional network requests.

By using the cache in combination with **SSR/SSG/ISR**, you can greatly improve the performance and user experience of your app, ensuring that data is always available quickly and reliably.

### State Management:

Since Apollo Client 3 manages it's own redux state internally and cache it's not necessary to have redux, at least to keep persistence on the data we fetch. Maybe at some point it will be necessary, but for application state management.
For this project I used `React Context` to maintain the pagination state and share it between the components that need it, avoiding moving the state to some component in the higher hierarchy and doing prop drilling to the child components.

## Assumptions

I assumed that clicking on a release takes you to a page with more details about this release.

## Technical debt

Include a custom 404 page to handle pages, and an `ErrorBoundary` component to centralize error handling among other specific and minor things.

## License

MIT license
