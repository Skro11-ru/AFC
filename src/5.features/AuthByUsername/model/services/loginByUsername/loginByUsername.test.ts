import axios from 'axios';
import { userActions } from '@src/6.entities/User';
import { TestAsyncThunk } from '@src/7.shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
	test('success login', async () => {
		const userData = { id: '1', username: 'admin', password: '123' };
		mockedAxios.post.mockReturnValue(
			Promise.resolve({
				data: userData,
			}),
		);
		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk(userData);

		expect(thunk.dispatch).toHaveBeenCalledWith(
			userActions.setAuthData(userData),
		);
		expect(thunk.dispatch).toHaveBeenCalledTimes(3);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toBe(userData);
	});

	test('error login', async () => {
		const userData = { id: '1', username: 'admin', password: '123' };
		mockedAxios.post.mockReturnValue(
			Promise.resolve({
				status: 403,
			}),
		);
		const thunk = new TestAsyncThunk(loginByUsername);
		const result = await thunk.callThunk(userData);

		expect(thunk.dispatch).toHaveBeenCalledTimes(2);
		expect(mockedAxios.post).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toBe('authorisationError');
	});
});
