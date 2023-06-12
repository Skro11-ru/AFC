import path from 'node:path';
import webpack from 'webpack';
import process from 'node:process';
import { BuildWebpackConfig } from './config/build/BuildWebpackConfig';
import {
	BuildEnvironment,
	BuildMode,
	BuildPaths,
} from './config/build/types/config';
import buildDotEnvironmentConfig from './config/build/buildDotEnvConfig';

export default (environment: BuildEnvironment) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};

	const isDev = environment.mode ? environment.mode === 'development' : true;
	buildDotEnvironmentConfig(isDev);

	const mode = process.env.MODE as BuildMode;

	const PORT = Number(process.env.PORT) || 3000;

	const config: webpack.Configuration = BuildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
	});
	return config;
};
