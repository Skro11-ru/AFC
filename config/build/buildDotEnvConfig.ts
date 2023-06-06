import dotenv, { DotenvConfigOutput } from 'dotenv';
import path from 'path';

export default (isDev: boolean): DotenvConfigOutput => {
	return dotenv.config({
		path: path.resolve(
			__dirname,
			'env',
			`.env.${isDev ? 'development' : 'production'}`,
		),
	});
};
