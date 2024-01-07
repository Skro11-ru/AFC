import { StateSchema } from '@src/1.app/providers/StoreProvider';

export const getLoginIsLoading = (state: StateSchema) =>
	state?.loginForm?.isLoading || false;
