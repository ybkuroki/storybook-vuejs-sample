import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import {
    withKnobs,
    select,
    text,
    array
  } from '@storybook/addon-knobs';

import Message from '../components/message.vue'

import 'semantic-ui-css/semantic.min.css';

storiesOf('Message', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add('normal', () => {
      const types = {
          info: 'info',
          positive: 'positive',
          error: 'error'
      }
      const messageType = select('MessageType', types, 'info')
      const messages = text('Messages', "\[\'ログインに失敗しました。\'\]")
      return {
        components: { Message },
        template: `<Message messageType="${messageType}" :messages="${messages}" />`
      }
  },
  {
    info: {},
  });
