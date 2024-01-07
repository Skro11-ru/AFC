import { FC, lazy } from 'react';
import { ILoginFormProps } from './LoginForm';

export const LoginFormLazy = lazy<FC<ILoginFormProps>>(
	() =>
		new Promise((resolve) => {
			setTimeout(() => resolve(import('./LoginForm')), 1500);
		}),
);
