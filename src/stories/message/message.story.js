import {
  withKnobs,
  select,
  text
} from '@storybook/addon-knobs'

import Message from '../../components/message.vue'

import 'semantic-ui-css/semantic.min.css'

export default {
  title: 'Message',
  decorators: [withKnobs]
}

const types = {
  info: 'info',
  positive: 'positive',
  error: 'error'
}

const messages = text('Messages', "\[\'メッセージテキスト\'\]")

export const Normal = () => ({
  props: {
    messageType: {
      type: String,
      default: select('MessageType', types, 'info')
    }
  },
  components: { Message },
  template: `<Message :messageType="messageType" :messages="${messages}" />`
})

Normal.story = {
  name: 'Normal',
}
