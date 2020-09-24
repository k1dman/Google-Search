# Homework for 24iMedia

## Quick start

1. Clone this repo using:
  ```shell
  $ git clone git@github.com:k1dman/homework24i.git
  ```

2. To install dependencies and clean the git repo run:

  ```shell
  $ yarn install
  ```

  *We recommend using `yarn` for installing packages, but you can use `npm` instead*:

  ```shell
  $ npm install
  ```
3. Create first build

  ```shell
  $ yarn run build:prod
  ```
4. Copy .env.example file to .env and make the necessary changes there

5. Run project in Dev mode

  ```shell
  $ yarn run dev
  ```

## Features

** Modern ES6 for using template strings, JSX syntax, object destructuring arrow functions and more
* Babel for old browser support
* SASS/SCSS: make styles greate again, with no tears

## Project Structure

#### `client/`

You will write your app in this folder. You will spend most of your time in here.

#### `client/components`

This folder contains all your components

#### `webpack.development.config.js` `and webpack.production.frontend.config.js`
Project environment configs. Webpack uses proper config depending on defined application environment.
By default `webpack.development.config.js` is used unless you build the application with --config webpack.production.frontend.config.js variable.


