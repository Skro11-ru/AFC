import { Story } from '@storybook/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from '@src/5.features/AuthByUsername/model/slice/loginSlice';
import { StateSchema, StoreProvider } from '@src/1.app/providers/StoreProvider';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	// @ts-ignore
	loginForm: loginReducer,
};

export const storeDecorator =
	(
		state: DeepPartial<StateSchema>,
		asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
	) =>
	(StoryComponent: Story) =>
		(
			<StoreProvider
				initialState={state}
				asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
			>
				<StoryComponent />
			</StoreProvider>
		);
