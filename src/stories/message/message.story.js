import Message from '../../components/message.vue'

import 'semantic-ui-css/semantic.min.css'

export default {
  title: 'Message',
  component: Message,
  argTypes: {
    messageType: {
      control: { type: 'select', options: ['info', 'positive', 'error'] }
    },
    messages: { control: 'array'},
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Message },
  template: `<Message :messageType="messageType" :messages="messages" />`,
});

export const Normal = Template.bind({});
Normal.args = {
  messageType: 'info',
  messages: ['Message1', 'Message2'],
};
