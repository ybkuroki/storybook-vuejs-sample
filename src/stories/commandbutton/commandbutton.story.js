import { action } from '@storybook/addon-actions'
import CommandButton from '../../components/commandbutton.vue'

import 'semantic-ui-css/semantic.min.css'

export default {
  title: 'CommandButton',
  component: CommandButton,
  argTypes: {
    name: { control: 'text' },
    className: {
      control: { type: 'select', options: ['primary', 'secondary', 'positive', 'negative']}
    },
    isLoading: { control: 'boolean' },
    useDiv: { control: 'boolean'}
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CommandButton },
  template: `<CommandButton :name="name" :className="className" :useDiv="useDiv" :isLoading="isLoading" @click="action" />`,
  methods: {
    action: action('button-clicked')
  }
});

export const Normal = Template.bind({});
Normal.args = {
  name: 'ボタン',
  className: 'primary',
  useDiv: false,
  isLoading: false,
};
