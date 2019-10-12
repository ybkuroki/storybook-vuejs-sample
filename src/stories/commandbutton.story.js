import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withInfo } from 'storybook-addon-vue-info'
import {
    withKnobs,
    text,
    boolean
} from '@storybook/addon-knobs';

import CommandButton from '../components/commandbutton.vue'

import 'semantic-ui-css/semantic.min.css';

storiesOf('CommandButton', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addDecorator(() => ({
    // Decorated with `story` component
    template: '<div class="ui form"><story/></div>',
  }))
  .add('normal', () => ({
    props: {
        name: {
            type: String,
            default: text('Name', 'ボタン')
        },
        className: {
            type: String,
            default: text('ClassName', 'primary right')
        },
        isLoading: {
            type: Boolean,
            default: boolean('isLoading', false)
        },
        useDiv: {
            type: Boolean,
            default: boolean('useDiv', false)
        }
    },
    components: { CommandButton },
    template: `<CommandButton :name="name" :className="className" :useDiv="useDiv" :isLoading="isLoading" @click="action" />`,
    methods: {
        action: action('button-clicked')
    }
  }),
  {
    info: {},
  });
