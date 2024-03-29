import { CounterSchema } from '@src/6.entities/Counter';
import { UserSchema } from '@src/6.entities/User';
import { LoginSchema } from '@src/5.features/AuthByUsername';
import {
	AnyAction,
	CombinedState,
	EnhancedStore,
	Reducer,
	ReducersMapObject,
} from '@reduxjs/toolkit';

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;

	// async reducers
	loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;
export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}
