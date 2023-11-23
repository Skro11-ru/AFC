import { StateSchema } from '@src/1.app/providers/StoreProvider';

export const getCounter = (state: StateSchema) => state.counter;
