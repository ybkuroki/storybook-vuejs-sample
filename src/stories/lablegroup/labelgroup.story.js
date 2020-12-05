import LabelGroup from '../../components/labelgroup.vue'

import 'semantic-ui-css/semantic.min.css'

const templateDecorator = () => ({
  template: `
<div class="ui form"><story/></div>
	`,
});

export default {
  title: 'LabelGroup',
  component: LabelGroup,
  argTypes: {
    title: { control: 'text' },
    name: {control: 'text'}
  },
  decorators: [templateDecorator],
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LabelGroup },
  template: `<LabelGroup :title="title" :name="name" />`,
});

export const Title = Template.bind({});
Title.args = {
  title: 'タイトル',
  name: 'データ',
};
