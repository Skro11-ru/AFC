import { StateSchema } from '@src/1.app/providers/StoreProvider';

export const getLoginPassword = (state: StateSchema) =>
	state?.loginForm?.password || '';
