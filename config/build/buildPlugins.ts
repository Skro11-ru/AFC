import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({
	paths,
	isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
	const plugins = [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'dss/[name]. [contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: isDev,
		}),

		new ReactRefreshWebpackPlugin(),
	];

	if (isDev) {
		plugins.push(
			new ReactRefreshWebpackPlugin(),
			new webpack.HotModuleReplacementPlugin(),
		);
	}
	return plugins;
}
