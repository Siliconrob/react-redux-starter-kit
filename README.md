# React Redux Starter Kit
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Github All Releases](https://img.shields.io/github/downloads/ghalex/react-redux-starter-kit/total.svg)](https://github.com/ghalex/react-redux-starter-kit/releases/tag/v0.10.0)
[![GitHub release](https://img.shields.io/github/release/ghalex/react-redux-starter-kit.svg)]()
[![AUR](https://img.shields.io/aur/license/yaourt.svg)](https://github.com/ghalex/react-redux-starter-kit/blob/master/LICENSE)

Boilerplate for a better Redux Architecture. This is the architecture we use at [@Coderbox](https://www.coderbox.me). If you decided to try it or perhaps your just investigating a better option, good for you. With Redux the good news is your application will enjoy a productivity boost from the simplicity of knowing precisely where data logic lives.

# Table of Contents
1. [Requirements](#requirements)
2. [Install](#install)
3. [Application Structure](#structure)
4. [Routing](#routing)

## Requirements
* **node**  `"^4.0.0"`
* **gulp** `"^3.9.1"`
* **npm** `"^3.0.0"`

## Install

Clone the project and run:

```bash
$ git clone https://github.com/ghalex/react-redux-starter-kit.git <project-name>
$ cd <project-name>
$ npm install
$ gulp
$ npm start
```

To start in development
```bash
$ npm start
$ gulp watch
```

## Application Structure

Application structure is very similar to [MERN](http://mern.io/). Everyting is grouped by feature and not by actions / reducers / components.
Check this article for a detailed information [Three Rules for Structuring Redux Application](https://jaysoo.ca/2016/02/28/organizing-redux-application/)

```
.
├── server                    # Express application
│   └── index.js              # Server application entry point
├── src                       # Application source code
│   ├── index.js              # Application entry point
│   ├── index.less            # Application main css
│   ├── pages                 # 
│   ├── projects              # Sample module
│   ├── todos                 # Sample module
│   │   ├── index.js          # Module entry point
│   │   ├── actions.js        # Module actions
│   │   ├── constants.js      # Module constants
│   │   ├── reducer.js        # Module reducer
│   │   ├── selectors.js      # Module selectors
│   │   ├── components        # 
│   │   │   ├── ListTodos.js  # 
│   │   │   ├── Todo.js       # 
│   │   │   ├── SearchTodo.js # 
│   │   └── views             # 
│   │       ├── ViewTodos.js  # A view combines multiple components & provide data from state
└── tests                     # Unit tests
```

## Routing

This boilerplate use `react-router` for routing. See `src\index.js` to check all routes.
