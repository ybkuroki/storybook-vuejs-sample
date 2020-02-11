import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text
} from '@storybook/addon-knobs';

import Modal from '../../components/modal.vue'
import CommandButton from '../../components/commandbutton.vue'

export default {
  title: 'Modal',
  decorators: [withKnobs]
}

export const Default = () => ({
  props: {
    header: {
      type: String,
      default: text('Header', 'モーダルヘッダー')
    },
    content: {
      type: String,
      default: text('Content', 'モーダルコンテンツ')
    }
  },
  components: { Modal, CommandButton },
  template:
    `<Modal v-model="showModal">
      <template slot="header">
        {{ header }}
      </template>
      <template slot="content">
        {{ content }}
      </template>
      <template slot="footer">
        <CommandButton name="キャンセル" className="black" :useDiv="true" @click="clickCancel" />
        <CommandButton name="OK" className="primary right" :useDiv="true" @click="clickOk" />
      </template>
    </Modal>`,
  data() {
    return { showModal: true }
  },
  methods: {
    clickCancel: action('click Cancel Button'),
    clickOk: action('click Ok Button')
  }
})

Default.story = {
  name: 'Default'
}
