# Programming3-Frontend

React.js based website

## Hosting

You can currently access the website with the following link: https://programming3frontend.web.app/

## UnitTests

Instead of Travis CI, we used the local GitHub workflows pipeline to automatically test our unit tests on each pull request made into the main branch, as well as the main branch itself. You can see below the status of the current main branch.

![UnitTests](https://github.com/Benedict-Carling/Programming3-Frontend/workflows/UnitTests/badge.svg)

The workflow initiator file can be seen within the `.github/workflows/` folder and the unit tests themselves can be found within `src/__tests__` folder

## Code Formatting

Our repo uses prettier (https://prettier.io) code formatting, and enforces pull requests and commits pass prettier code formatting checks, the current code formatting status on the main branch is

![CodeFormatting](https://github.com/Benedict-Carling/Programming3-Frontend/workflows/CodeFormatting/badge.svg)

To check if you code is prettier compliant run the command

```bash
$ npx prettier --check .
```

To allow prettier to rewrite your code to be prettier compliant run:

```bash
$ npx prettier --write .
```

## Installation

Git clone the project from: https://github.com/Benedict-Carling/Programming3-Frontend.git
or by using the terminal:

```bash
$ git clone https://github.com/Benedict-Carling/Programming3-Frontend.git
```

Use terminal inside root of the project to type:

```bash
$ npm install
```

## Usage

To host locally, use terminal inside root of the project to type:

```bash
$ npm start
```
