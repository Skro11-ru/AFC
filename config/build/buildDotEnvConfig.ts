import dotenv, { DotenvConfigOutput } from 'dotenv';
import path from 'path';

export default (isDev: boolean): DotenvConfigOutput => {
	console.log(
		`########################## buildDotEnvConfig ##### ${5}\n`,
		isDev,
	);

	return dotenv.config({
		path: path.resolve(
			__dirname,
			'env',
			`.env.${isDev ? 'development' : 'production'}`,
		),
	});
};
