import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import {
  withKnobs,
  text,
  boolean
} from '@storybook/addon-knobs';

import InputBox from '../components/inputbox.vue'

import 'semantic-ui-css/semantic.min.css';

storiesOf('InputBox', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addDecorator(() => ({
    // Decorated with `story` component
    template: '<div class="ui form"><story/></div>',
  }))
  .add('with Title', () => ({
    props: {
      title: {
        type: String,
        default: text('Title', 'タイトル')
      },
      valide: {
        type: Boolean,
        default: boolean('Validation', false)
      }
    },
    components: { InputBox },
    template: `<InputBox v-model="text" :title="title" :isValide="valide" />`,
    data() {
        return { text: '', name : 'InputBox' }
    }
  }),
  {
    info: {},
  });
