import InputBox from '../../components/inputbox.vue'

import 'semantic-ui-css/semantic.min.css'

const templateDecorator = () => ({
  template: `
<div class="ui form"><story/></div>
	`,
});

export default {
  title: 'InputBox',
  component: InputBox,
  argTypes: {
    title: { control: 'text' },
    isValide: {control: 'boolean'}
  },
  decorators: [templateDecorator],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InputBox },
  template: `<InputBox v-model="text" :title="title" :isValide="isValide" />`,
  data() {
    return { text: '', name: 'InputBox' }
  }
});

export const Title = Template.bind({});
Title.args = {
  title: 'タイトル',
  isValide: false,
};
