import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('getCounter', () => {
	test('should return counter value', () => {
		const state: CounterSchema = {
			value: 10,
		};
		expect(counterReducer(state, counterActions.increment())).toEqual({
			value: 11,
		});
		expect(counterReducer(state, counterActions.decrement())).toEqual({
			value: 9,
		});
	});
	test('should work with empty state', () => {
		expect(counterReducer(undefined, counterActions.increment())).toEqual({
			value: 1,
		});
	});
});
