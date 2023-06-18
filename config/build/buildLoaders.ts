import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildPLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};
	const svgLoader = buildSvgLoader();

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: ['file-loader'],
	};

	const sassLoader = buildCssLoader(options.isDev);

	const babelLoader = {
		test: /\.(js|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [
					['i18next-extract', { nsSeparator: '~', locales: ['ru', 'en'] }],
				],
			},
		},
	};
	return [fileLoader, svgLoader, babelLoader, typescriptLoader, sassLoader];
}
