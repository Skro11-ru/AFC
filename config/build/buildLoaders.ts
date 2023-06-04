import webpack from 'webpack';

export function buildPLoaders(): webpack.RuleSetRule[] {
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};
	return [typescriptLoader];
}
