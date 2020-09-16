# <img src="https://static1.thefair.net.cn/horizon_ui/image/icon_loading_light.svg" width="35" height="35" alt="Horizon UI"> Horizon UI

<p align="left">
  <a href="https://www.npmjs.org/package/horizon-ui">
    <img src="https://img.shields.io/npm/v/horizon-ui.svg?style=for-the-badge&logo=npm" alt="npm version">
  </a>
  <a href="https://npmcharts.com/compare/horizon-ui?minimal=true">
    <img src="https://img.shields.io/npm/dt/horizon-ui.svg?style=for-the-badge&logo=npm" alt="npm downloads">
  </a>
  <a href="https://github.com/thefair-net/Horizon-UI">
    <img src="https://img.shields.io/github/stars/thefair-net/horizon-ui?logo=github&style=for-the-badge" alt="Github Stars">
  </a>
  <a href="https://github.com/thefair-net/Horizon-UI/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/thefair-net/horizon-ui?color=blue&logo=github&style=for-the-badge" alt="Github Contributors">
  </a>
  <a href="https://github.com/thefair-net/Horizon-UI/pulls">
    <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome">
  </a>
  <a href="https://github.com/thefair-net/Horizon-UI/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="MIT License">
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
import Horizon from 'horizon-ui'
import 'horizon-ui/static/theme.scss'

Vue.use(Horizon)
```

Or import specified component. (Use [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component))

```javascript
import Vue from 'vue'
import 'horizon-ui/static/theme.scss'
import {
  Feed,
  FeedCard,
  Loading,
  Toast
  // ...
} from 'horizon-ui'

Vue.use(Feed)
Vue.use(FeedCard)
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
