import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  boolean
} from '@storybook/addon-knobs'

import CommandButton from '../../components/commandbutton.vue'

import 'semantic-ui-css/semantic.min.css'

export default {
  title: 'CommandButton',
  decorators: [withKnobs]
}

export const Normal = () => ({
  props: {
    name: {
      type: String,
      default: text('Name', 'ボタン')
    },
    className: {
      type: String,
      default: text('ClassName', 'primary right')
    },
    isLoading: {
      type: Boolean,
      default: boolean('isLoading', false)
    },
    useDiv: {
      type: Boolean,
      default: boolean('useDiv', false)
    }
  },
  components: { CommandButton },
  template: `<CommandButton :name="name" :className="className" :useDiv="useDiv" :isLoading="isLoading" @click="action" />`,
  methods: {
    action: action('button-clicked')
  }
})

Normal.story = {
  name: 'Normal'
}
