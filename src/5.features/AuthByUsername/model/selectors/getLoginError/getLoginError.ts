import { StateSchema } from '@src/1.app/providers/StoreProvider';

export const getLoginError = (state: StateSchema) =>
	state?.loginForm?.error || undefined;
