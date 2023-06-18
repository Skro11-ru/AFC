import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'node:path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

const config: StorybookConfig = {
	stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async (configWebpack) => {
		configWebpack.resolve.alias['@src'] = path.resolve(__dirname, '../../src');
		configWebpack?.module?.rules?.push(buildCssLoader(true));

		configWebpack.module.rules = configWebpack.module.rules.map((rule) => {
			if (/svg/.test(rule.test as string)) {
				return { ...rule, exclude: /\.svg$/i };
			}

			return rule;
		});

		configWebpack?.module?.rules?.push(buildSvgLoader());

		return configWebpack;
	},
};
export default config;
