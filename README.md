# Varnish

A library of AI2 themed React components.

## Includes

* Custom theme provider for both [Material-UI](https://material-ui.com/) and [Styled-Components](https://www.styled-components.com/).
* Common AI2 Styled-Components, components, and utilities.

## Peer Dependencies

* @material-ui/core
* @material-ui/icons
* @material-ui/lab
* lodash
* react
* react-dom
* styled-components

## Installation

* NPM:

    ```bash
    npm install @allenai/varnish
    ```

* or Yarn:

    ```bash
    yarn add @allenai/varnish
    ```

## Usage

1. Basic

    ```html
    import React from 'react';
    import ReactDOM from 'react-dom';
    // Import the parts of Varnish you want. At minimum, you need to import the ThemeProvider
    import { ThemeProvider } from '@allenai/varnish';

    // Wrap your App with the Varnish ThemeProvider
    const VarnishApp =  () => (
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )

    // Render
    ReactDOM.render(<VarnishApp />, document.getElementById('root'));
    ```

1. Extended theme

    ```html
    import React from 'react';
    import ReactDOM from 'react-dom';
    // Import ThemeProvider and getVarnishTheme
    import { ThemeProvider, getVarnishTheme } from '@allenai/varnish';

    // Customize the theme
    const updatedTheme = getVarnishTheme(
    {
      palette: {
        primary: {
          main: '#00ff00' // setting primary buttons to be green
        }
      },
      testColorLocal: 'darkGreen' // add whatever other styles we want
    }

    // Wrap your App with the Varnish ThemeProvider
    const VarnishApp =  () => (
      <ThemeProvider theme={updatedTheme}>
        <App />
      </ThemeProvider>
    )

    // Render
    ReactDOM.render(<VarnishApp />, document.getElementById('root'));
    ```

## Contributing the Varnish

1. Clone the repository

    ```bash
    git clone git@github.com:allenai/varnish.git
    cd varnish
    yarn install
    ```

1. Running the demo

    ```bash
    yarn start
    ```

1. Testing the lib

    ```bash
    yarn test
    ```

1. For contributors external to AI2, make a fork and request a pr from that fork

1. For contributors internal to AI2, please request access rights by contacting REVIZ, then make a pr for your updated branch

1. Build and publish NPM (will be done via google soon, but for now)

    1. Update the package.json version field appropriately and create a git commit and tag for the version

        ```bash
        npm version major|minor|patch
        ```

    1. Publish the tag to github

        ```bash
        git push --tags
        ```

    1. Build the lib

        ```bash
        yarn build
        ```

    1. Publish to npm from the dist folder

        ```bash
        npm publish --access public ./dist
        ```
