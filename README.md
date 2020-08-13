# Horizon UI
This is a front-end component library based on Vue, design by Eyepetizer

## Introductions
We have written a [Documentation](https://thefair-net.github.io/Horizon-docs) to introduce Horizon UI to developers and UI designers.

Here are some [Examples](https://thefair-net.github.io/Horizon-UI) running on a mobile phone.

Please have a try!

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
