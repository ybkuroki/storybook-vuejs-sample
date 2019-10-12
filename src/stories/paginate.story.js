import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withInfo } from 'storybook-addon-vue-info'
import {
  withKnobs,
  number
} from '@storybook/addon-knobs';

import Pagination from '../components/paginate.vue'

import 'semantic-ui-css/semantic.min.css';

storiesOf('Pagination', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('normal', () => ({
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
  }),
  {
    info: {},
  });
