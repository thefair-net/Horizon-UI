import directive from '../../src/components/loading/directive';

export default {
  install(Vue) {
    Vue.use(directive);
  },
  directive,
};
