import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  number
} from '@storybook/addon-knobs'

import Pagination from '../../components/paginate.vue'

import 'semantic-ui-css/semantic.min.css'

export default {
  title: 'Pagination',
  decorators: [withKnobs]
}

export const Normal = () => ({
  props: {
    pageCount: {
      type: Number,
      default: number('PageCount', 5)
    }
  },
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
})

Normal.story = {
  name: 'Normal'
}
