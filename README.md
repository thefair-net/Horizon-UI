# <img src="https://static1.thefair.net.cn/horizon_ui/image/icon_loading_light.svg" width="35" height="35" alt="Horizon UI"> Horizon UI

<p align="left">
  <a href="https://www.npmjs.org/package/horizon-ui">
    <img src="https://img.shields.io/npm/v/horizon-ui.svg" alt="npm version">
  </a>
  <a href="https://npmcharts.com/compare/horizon-ui?minimal=true">
    <img src="http://img.shields.io/npm/dm/horizon-ui.svg" alt="npm downloads">
  </a>
  <a href="https://github.com/thefair-net/Horizon-UI">
    <img src="https://badgen.net/badge/github/Horizon UI?icon" alt="Github">
  </a>
  <a href="https://github.com/thefair-net/Horizon-UI">
    <img src="https://badgen.net/github/stars/thefair-net/Horizon-UI" alt="Github Stars">
  </a>
  <a href="#documentation">
    <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg" alt="PRs Welcome">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT License">
  </a>
</p>

> This is a front-end component library based on Vue, design by Eyepetizer

## Documentation
We have written a [Documentation](https://thefair-net.github.io/Horizon-docs) to introduce Horizon UI to developers and UI designers.

If you have any questions, please [create issues](https://github.com/thefair-net/Horizon-UI/issues) to contact us.

Have fun!

## Examples
Here are some mobile phone [examples](https://thefair-net.github.io/Horizon-UI)

![examples](https://static1.thefair.net.cn/horizon_ui/image/qrcode-examples.png)

## Install
```shell
yarn add horizon-ui
```

## Quick Start

Import all components.

```javascript
import Vue from 'vue'
import Horizion from 'horizon-ui'
import 'horizon-ui/static/theme.scss'

Vue.use(Horizion)
```

Or import specified component. (Use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component))

```javascript
import {
  Note,
  NoteCard,
  Loading,
  Toast
  // ...
} from 'horizon-ui'

Vue.use(Note)
Vue.use(NoteCard)
Vue.use(Loading)
Vue.prototype.$toast = Toast
```

## babel-plugin-component
- Auto import css file
- Modular import component

Installation
```shell
yarn add babel-plugin-component -D
```

Usage

.babelrc
```json
{
  "plugins": [
    ["component",
      {
        "libraryName": "horizon-ui",
        "styleLibraryName": "~node_modules/horizon-ui/static"
      },
      "horizon-ui"
    ]
  ]
}
```

## Homepage

- https://thefair-net.github.io/Horizon-docs

## Repository

- https://github.com/thefair-net/Horizon-UI

## LICENSE
[MIT](LICENSE)
