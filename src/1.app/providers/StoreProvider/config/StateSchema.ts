import { CounterSchema } from '@src/6.entities/Counter';
import { UserSchema } from '@src/6.entities/User';
import { LoginSchema } from '@src/5.features/AuthByUsername';

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;
	loginForm: LoginSchema;
}
