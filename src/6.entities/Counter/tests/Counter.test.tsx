import { screen } from '@testing-library/react';
import componentRender from '@src/7.shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from '../Counter';

describe('Counter', () => {
	const selector = 'value-title';
	test('render', () => {
		componentRender(<Counter />, {
			initialState: {
				counter: {
					value: 10,
				},
			},
		});
		expect(screen.getByTestId(selector)).toHaveTextContent('10');
	});

	test('increment', () => {
		componentRender(<Counter />, {
			initialState: {
				counter: {
					value: 10,
				},
			},
		});
		userEvent.click(screen.getByTestId('increment-btn'));
		expect(screen.getByTestId(selector)).toHaveTextContent('11');
	});

	test('decrement', () => {
		componentRender(<Counter />, {
			initialState: {
				counter: {
					value: 10,
				},
			},
		});
		userEvent.click(screen.getByTestId('decrement-btn'));
		expect(screen.getByTestId(selector)).toHaveTextContent('9');
	});
});
