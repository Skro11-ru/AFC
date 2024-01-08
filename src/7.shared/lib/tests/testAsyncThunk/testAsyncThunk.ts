import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from '@src/1.app/providers/StoreProvider';

type ActionCreatorType<Return, Argument, RejectedVaLue> = (
	// eslint-disable-next-line no-unused-vars
	argument: Argument,
) => AsyncThunkAction<Return, Argument, { rejectValue: RejectedVaLue }>;

export class TestAsyncThunk<Return, Argument, RejectedValue> {
	dispatch: Dispatch;

	getState: () => StateSchema;

	actionCreator: ActionCreatorType<Return, Argument, RejectedValue>;

	constructor(
		actionCreator: ActionCreatorType<Return, Argument, RejectedValue>,
	) {
		this.actionCreator = actionCreator;
		this.dispatch = jest.fn();
		this.getState = jest.fn();
	}

	async callThunk(argument: Argument) {
		const action = this.actionCreator(argument);
		return action(this.dispatch, this.getState, undefined);
	}
}
