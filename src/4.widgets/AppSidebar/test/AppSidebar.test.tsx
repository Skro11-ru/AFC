import { fireEvent, screen } from '@testing-library/react';
import componentRender from '@src/7.shared/lib/tests/componentRender/componentRender';
import { AppSidebar } from '../AppSidebar';

describe('Sidebar', () => {
	test('Test render', () => {
		componentRender(<AppSidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('Test toggle Sidebar', () => {
		componentRender(<AppSidebar />);
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
