import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from '@src/5.features/AuthByUsername';
import { counterReducer } from '@src/6.entities/Counter';
import { userReducer } from '@src/6.entities/User';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer,
		loginForm: loginReducer,
	};

	return configureStore<StateSchema>({
		reducer: rootReducers,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}
