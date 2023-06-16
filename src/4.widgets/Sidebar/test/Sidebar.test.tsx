import { fireEvent, screen } from '@testing-library/react';
import RenderWithTranslation from '@src/7.shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from '../components/Sidebar';

describe('Sidebar', () => {
	test('Test render', () => {
		RenderWithTranslation(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('Test toggle Sidebar', () => {
		RenderWithTranslation(<Sidebar />);
		const button = screen.getByTestId('sidebar-toggle');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(button);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});

	// test('Test clear theme', () => {
	// 	render(<AppButton theme={AppButtonTheme.CLEAR}>Test</AppButton>);
	// 	expect(screen.getByText('Test')).toHaveClass('clear');
	// 	screen.debug();
	// });
});
