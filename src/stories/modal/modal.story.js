import { action } from '@storybook/addon-actions'

import Modal from '../../components/modal.vue'
import CommandButton from '../../components/commandbutton.vue'

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    header: { control: 'text' },
    content: { control: 'text' },
    showModal: { control: 'boolean'},
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
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
  methods: {
    clickCancel: action('click Cancel Button'),
    clickOk: action('click Ok Button')
  },
});

export const Default = Template.bind({});
Default.args = {
  header: 'モーダルヘッダー',
  content: 'モーダルコンテンツ',
  showModal: true,
};

