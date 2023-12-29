import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '@src/1.app/providers/StoreProvider/config/store';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';

interface StorageProviderProps {
	children?: ReactNode;
	initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: FC<StorageProviderProps> = ({
	children,
	initialState,
}) => {
	const store = createReduxStore(initialState as StateSchema);

	return <Provider store={store}>{children}</Provider>;
};
