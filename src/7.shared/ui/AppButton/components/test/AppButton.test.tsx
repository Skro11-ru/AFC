import { render, screen } from '@testing-library/react';
import { AppButton, AppButtonTheme } from '../AppButton';

describe('AppButton', () => {
	test('Test render', () => {
		render(<AppButton>Test</AppButton>);
		expect(screen.getByText('Test')).toBeInTheDocument();
	});

	test('Test clear theme', () => {
		render(<AppButton theme={AppButtonTheme.CLEAR}>Test</AppButton>);
		expect(screen.getByText('Test')).toHaveClass('clear');
		screen.debug();
	});
});
