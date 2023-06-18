import { fireEvent, screen } from '@testing-library/react';
import RenderWithTranslation from '@src/7.shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { AppSidebar } from '../AppSidebar';

describe('Sidebar', () => {
	test('Test render', () => {
		RenderWithTranslation(<AppSidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('Test toggle Sidebar', () => {
		RenderWithTranslation(<AppSidebar />);
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
