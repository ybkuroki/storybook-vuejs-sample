import { action } from '@storybook/addon-actions'

import Pagination from '../../components/paginate.vue'

import 'semantic-ui-css/semantic.min.css'

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: {
    pageCount: {
      control: { type: 'range', min: 1, max: 20, step: 1 },
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Pagination },
  template:
    `<Pagination ref="pagination"
      :pageCount="pageCount" 
      containerClass="ui pagination menu"
      prevLinkClass="icon item"
      nextLinkClass="icon item"
      pageLinkClass="item"
      @clickHandler="action"
      :noLiSurround="true" >
      <i slot="prevContent" class="left chevron icon"></i>
      <i slot="nextContent" class="right chevron icon"></i>
    </Pagination>`,
  methods: {
    action: action('button-clicked')
  }
});

export const Normal = Template.bind({});
Normal.args = {
  pageCount: 5,
};
