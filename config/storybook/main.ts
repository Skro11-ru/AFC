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
		// @ts-ignore
		// eslint-disable-next-line no-param-reassign
		configWebpack?.resolve?.alias['@src'] = path.resolve(
			__dirname,
			'../../src',
		);
		configWebpack?.module?.rules?.push(buildCssLoader(true));

		// @ts-ignore
		// eslint-disable-next-line no-param-reassign
		configWebpack.module.rules = configWebpack.module.rules.map((rule) => {
			// @ts-ignore
			if (/svg/.test(rule.test as string)) {
				// @ts-ignore
				return { ...rule, exclude: /\.svg$/i };
			}

			return rule;
		});

		configWebpack?.module?.rules?.push(buildSvgLoader());

		return configWebpack;
	},
};
export default config;
