import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
	isLoading: false,
	username: '',
	password: '',
};

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername(state, action: PayloadAction<string>) {
			state.username = action.payload;
		},
		setPassword(state, action: PayloadAction<string>) {
			state.password = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginByUsername.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			// You can chain calls, or have separate `builder.addCase()` lines each time
			.addCase(loginByUsername.fulfilled, (state, action) => {
				state.isLoading = false;
			})
			.addCase(loginByUsername.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			});
	},
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
