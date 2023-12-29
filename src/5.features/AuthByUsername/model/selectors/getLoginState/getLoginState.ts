import { StateSchema } from '@src/1.app/providers/StoreProvider';

export const getLoginState = (state: StateSchema) => state?.loginForm;
