# Osedea React Starter

This is the Osedea starter template for projects using React on the frontend.

---

packages to add?

- humps

other stuff:

- themeprovider
- tsconfig

---

## Features

- Redux Toolkit
- Typescript
- Jest
- React Testing Library
- ESLint
- Prettier
- Styled Icons Pack
- Source Map Explorer to analyze code bloat
- Unit & Integration Test examples

## Setup

1. Click the `Use this Template` button or `git clone git@github.com:Osedea/osedea_starter_react-2.git my-app`
2. `cd my-app`
3. `yarn`
4. `cp .env.example .env.local`
5. That's it! See the Available Commands list below.

## Available Commands

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Testing

> [Write Tests. Not too many. Mostly integration.](https://kentcdodds.com/blog/write-tests)

The react-testing-library is a great utility to work alongside Jest. It makes you focus more on writing tests the way an actual user would interact with your application.

You will notice that some HTML elements have the `data-testid` custom attribute. It is intended to facilitate the work of the QA agents and automated e2e tests. This attribute should be used sparingly on relevant elements.

Some useful links:

- [React Testing Library docs](https://testing-library.com/docs/react-testing-library/intro)
- When writing integration tests, think of [Arrange, Act, Assert](http://wiki.c2.com/?ArrangeActAssert)
- [React Testing Library Examples 1](https://react-testing-examples.com/)
- [React Testing Library Examples 2](https://github.com/kentcdodds/react-testing-library-course/tree/master/src/__tests__)
- [DOM Testing Library Cheatsheet](https://testing-library.com/docs/dom-testing-library/cheatsheet)
- [React Testing Library Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
- [Jest DOM Custom Matchers - Use for Integration Tests](https://github.com/testing-library/jest-dom#custom-matchers)
- [Jest Matchers - Use for Unit Tests](https://jestjs.io/docs/en/expect)

## Typescript

See the [react-typescript-cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet) and the [official typescript docs](https://www.typescriptlang.org/docs/home.html) for help

## OSD-CLI generators

This react starter project comes with 2 osd-cli generators. One for generating components, one for generating pages and "wiring" them. Feel free to update these generators to fit your project's needs as your project evolves.

Run `osd-cli g` to try it out, checkout the [osd-cli generators](https://github.com/Osedea/osd-cli/blob/master/docs/generate.md) docs for more info.
