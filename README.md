# Horizon UI
This is a front-end component library based on Vue, design by Eyepetizer

## Documentation
We have written a [Documentation](https://thefair-net.github.io/Horizon-docs) to introduce Horizon UI to developers and UI designers.

If you have any questions, please [create issues](https://github.com/thefair-net/Horizon-UI/issues) to contact us.

Have fun!

## Examples
Here are some mobile phone [examples](https://thefair-net.github.io/Horizon-UI)

![examples](http://static.thefair.net.cn/horizon_ui/image/20200814/e5703505fcd4b0589b6f15206ecb3d7b)

## Install
```shell
yarn add horizon-ui
```

## Quick Start
``` javascript
import Vue from 'vue'
import Horizion from 'horizon-ui'

Vue.use(Horizion)

// or
import {
  Note,
  NoteCard,
  Toast
  // ...
} from 'horizon-ui'

Vue.component(Note.name, Note)
Vue.component(NoteCard.name, NoteCard)
Vue.prototype.$toast = Toast
```
