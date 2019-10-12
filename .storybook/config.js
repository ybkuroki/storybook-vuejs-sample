import { configure, addParameters, addDecorator } from '@storybook/vue';
import Vue from 'vue';
import Vuex from 'vuex';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);
Vue.use(Vuex);

addParameters({
  options: {
    hierarchyRootSeparator: /\|/,
  },
  docs: {
  },
});

configure(require.context('../src/stories', true, /\.story\.(js|mdx)$/), module);
