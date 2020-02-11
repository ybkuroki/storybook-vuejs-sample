import {
  withKnobs,
  text,
  boolean
} from '@storybook/addon-knobs'

import InputBox from '../../components/inputbox.vue'

import 'semantic-ui-css/semantic.min.css'

export default {
  title: 'InputBox',
  decorators: [withKnobs]
}

export const Title = () => ({
  props: {
    title: {
      type: String,
      default: text('Title', 'タイトル')
    },
    valide: {
      type: Boolean,
      default: boolean('Validation', false)
    }
  },
  components: { InputBox },
  template: 
    `<div class="ui form">
      <InputBox v-model="text" :title="title" :isValide="valide" />
    </div>`,
  data() {
    return { text: '', name: 'InputBox' }
  }
})

Title.story = {
  name: 'with Title'
}
