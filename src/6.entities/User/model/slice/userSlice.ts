import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CONSTANS } from '@src/7.shared/const/localStorage';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload;
		},
		initAuthData: (state) => {
			const data = localStorage.getItem(CONSTANS.userLocalStorageKey);
			if (data) {
				state.authData = JSON.parse(data);
			}
		},
		logout: (state) => {
			localStorage.removeItem(CONSTANS.userLocalStorageKey);
			state.authData = undefined;
		},
	},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
