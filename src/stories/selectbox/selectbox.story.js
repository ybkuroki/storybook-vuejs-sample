import {
  withKnobs,
  text
} from '@storybook/addon-knobs'

import SelectBox from '../../components/selectbox.vue'

import 'semantic-ui-css/semantic.min.css'

export default {
  title: 'SelectBox',
  decorators: [withKnobs({ escapeHTML: false })]
}

const options = text('Options', "[{'id':1,'name':'select1'},{'id':2,'name':'select2'},{'id':3,'name':'select3'}]")

export const Title = () => ({
  props: {
    title: {
      type: String,
      default: text('Title', 'タイトル')
    }
  },
  components: { SelectBox },
  template: `<div class="ui form"><SelectBox v-model="value" :title="title" :options="${options}" /></div>`,
  data() {
    return { value: '1' }
  }
})

Title.story = {
  name: 'with Title',
}
