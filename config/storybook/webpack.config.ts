import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'node:path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	};
	// @ts-ignore
	config.resolve.modules.push(paths.src);
	// @ts-ignore
	config.resolve.extensions.push('.ts', '.tsx');
	// @ts-ignore
	// eslint-disable-next-line no-param-reassign
	config.resolve.alias['@src'] = path.resolve(__dirname, '../../src');
	// @ts-ignore
	// eslint-disable-next-line no-param-reassign
	config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
		if (/svg/.test(rule.test as string)) {
			return { ...rule, exclude: /\.svg$/i };
		}

		return rule;
	});

	if (config.module?.rules) {
		config.module.rules.push(
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
			buildCssLoader(true),
		);
	}

	if (config.plugins) {
		config.plugins.push(
			new DefinePlugin({
				__IS_DEV__: true,
			}),
		);
	}

	return config;
};
