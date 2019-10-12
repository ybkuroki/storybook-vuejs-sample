import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import {
    withKnobs,
    text
  } from '@storybook/addon-knobs';

import LabelGroup from '../components/labelgroup.vue'

import 'semantic-ui-css/semantic.min.css';

storiesOf('LabelGroup', module)
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
      name: {
        type: String,
        default: text('Name', 'データ')
      }
    },
    components: { LabelGroup },
    template: `<LabelGroup :title="title" :name="name" />`
  }),
  {
    info: {},
  });
