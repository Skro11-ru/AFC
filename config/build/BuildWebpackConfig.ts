import { BuildOptions } from './types/config';
import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildPLoaders } from './buildLoaders';
import { buildResolvers } from './buildRwsolvers';

export function BuildWebpackConfig(
	options: BuildOptions,
): webpack.Configuration {
	const { paths, mode } = options;
	return {
		mode: mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildPLoaders(),
		},
		resolve: buildResolvers(),
	};
}
