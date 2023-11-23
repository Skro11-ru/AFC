import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '@src/6.entities/Counter';
import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) =>
	configureStore<StateSchema>({
		reducer: { counter: counterReducer },
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
