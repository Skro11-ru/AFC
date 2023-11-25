// export interface CounterState {
// 	value: number;
// }

import { CounterSchema } from '@src/6.entities/Counter';
import { UserSchema } from '@src/6.entities/User';

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;
}
