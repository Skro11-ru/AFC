import { StateSchema } from '@src/1.app/providers/StoreProvider';

export const getUserAuthData = (state: StateSchema) => {
	return state.user.authData;
};
