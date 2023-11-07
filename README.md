# @rebase-agency/cra-template-storybook

![version](https://img.shields.io/npm/v/@rebase-agency/cra-template-storybook)

A starting custom UI library template with Storybook and Rollup

## Installation

When creating a new react-project, run the following command:

```shell
yarn create react-app %PROJECT_NAME% --template @rebase-agency/storybook
```

Or

```shell
npx create-react-app %PROJECT_NAME% --template @rebase-agency/storybook
```

Then

```shell
cd %PROJECT_NAME%
yarn storybook
```

For build your UI package run
```shell
yarn rollup-build
```

Your package will build in `dist` folder.

## Features
- Storybook with autodocs and theme
- Rollup with ready configuration
