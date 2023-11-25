import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from '@src/6.entities/Counter';
import { userReducer } from '@src/6.entities/User';
import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
	const rootReducer: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer,
	};
	return configureStore<StateSchema>({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
};
