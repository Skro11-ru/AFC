import dotenv, { DotenvConfigOutput } from 'dotenv';
import path from 'node:path';

export default (isDev: boolean): DotenvConfigOutput => dotenv.config({
		path: path.resolve(
			__dirname,
			'env',
			`.env.${isDev ? 'development' : 'production'}`,
		),
	});
