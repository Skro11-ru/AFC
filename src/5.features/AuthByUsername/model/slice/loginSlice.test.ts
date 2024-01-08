import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '@src/5.features/AuthByUsername';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
	test('test set username', () => {
		const state: DeepPartial<LoginSchema> = { username: 'admin' };
		expect(loginReducer(state, loginActions.setUsername('admin'))).toEqual({
			username: 'admin',
		});
	});
	test('test set password', () => {
		const state: DeepPartial<LoginSchema> = { password: '123123' };
		expect(loginReducer(state, loginActions.setPassword('123123'))).toEqual({
			password: '123123',
		});
	});
});
