import path from 'path';
import webpack from 'webpack';
import { BuildWebpackConfig } from './config/build/BuildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';
import process from 'process';
import buildDotEnvConfig from './config/build/buildDotEnvConfig';

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};

	const isDev = env.mode ? env.mode === 'development' : true;
	buildDotEnvConfig(isDev);

	const mode = process.env.MODE as BuildMode;

	const PORT = Number(process.env.PORT) || 3000;

	const config: webpack.Configuration = BuildWebpackConfig({
		mode: mode,
		paths,
		isDev,
		port: PORT,
	});
	return config;
};
