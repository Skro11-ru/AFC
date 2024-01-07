import { StateSchema } from '@src/1.app/providers/StoreProvider';

export const getLoginUsername = (state: StateSchema) =>
	state?.loginForm?.username || '';
