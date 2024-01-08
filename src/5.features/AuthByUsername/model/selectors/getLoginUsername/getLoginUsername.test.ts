import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@src/1.app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
	test('should return value', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: 'admin',
			},
		};
		expect(getLoginUsername(state as StateSchema)).toEqual('admin');
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginUsername(state as StateSchema)).toEqual('');
	});
});
