import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import {
  withKnobs,
  text,
  boolean
} from '@storybook/addon-knobs';

import NavBar from '../components/navbar.vue'

import 'semantic-ui-css/semantic.min.css';

storiesOf('NavBar', module)
	.addDecorator(withKnobs)
	.add('normal', () => ({
		props: {
			title: {
				type: String,
				default: text('Title', 'タイトル')
			},
			isToggle: {
				type: Boolean,
				default: boolean('isToggle', true)
			}
		},
		components: { NavBar },
    template: 
`<NavBar :title="title" :isToggle="isToggle">
			<template slot="content">
				<a class="item" @click="action">リンク1</a>
				<a class="item" @click="action">リンク2</a>
				
				<div class="right menu">
					<div class="item">表示</div>
					<a class="item" @click="action">リンク3</a>
				</div>
			</template>
			<template slot="mobile-right-content">
				<div class="item">表示</div>
			</template>
			<template slot="toggle-content">
				<a class="item" @click="action">リンク1</a>
				<a class="item" @click="action">リンク2</a>
				<a class="item" @click="action">リンク3</a>
			</template>
</NavBar>`,
		methods: {
				action: action('link-clicked')
		},
	}));