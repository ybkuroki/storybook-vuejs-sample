import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import {
  withKnobs,
  text,
  array
} from '@storybook/addon-knobs';

import SelectBox from '../components/selectbox.vue'

import 'semantic-ui-css/semantic.min.css';

storiesOf('SelectBox', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .addDecorator(() => ({
    // Decorated with `story` component
    template: '<div class="ui form"><story/></div>',
  }))
  .add('with Title', () => {
    const title = text('Title', 'タイトル')
    const options = text('Options', "[{'id':1,'name':'select1'},{'id':2,'name':'select2'},{'id':3,'name':'select3'}]")
    return {
      components: { SelectBox },
      template: `<SelectBox v-model="value" title="${title}" :options="${options}" />`,
      data() {
          return { value: '1' }
      }
    }
  },
    {
      info: {},
    });