import { action } from '@storybook/addon-actions'

import NavBar from '../../components/navbar.vue'

import 'semantic-ui-css/semantic.min.css';

export default {
	title: 'NavBar',
	component: NavBar,
	argTypes: {
		title: { control: 'text' },
		isToggle: {control: 'boolean'},
	},
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
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
});

export const Normal = Template.bind({});
Normal.args = {
	title: 'タイトル',
	isToggle: true,
};
