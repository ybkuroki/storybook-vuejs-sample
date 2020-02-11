import {
  withKnobs,
  text
} from '@storybook/addon-knobs'

import LabelGroup from '../../components/labelgroup.vue'

import 'semantic-ui-css/semantic.min.css'

export default {
  title: 'LabelGroup',
  decorators: [withKnobs]
}

export const Title = () => ({
  props: {
    title: {
      type: String,
      default: text('Title', 'タイトル')
    },
    name: {
      type: String,
      default: text('Name', 'データ')
    }
  },
  components: { LabelGroup },
  template:
    `<div class="ui form">
      <LabelGroup :title="title" :name="name" />
    </div>`
})

Title.story = {
  name: 'with Title'
}
