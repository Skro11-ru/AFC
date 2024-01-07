import componentRender from '@src/7.shared/lib/tests/componentRender/componentRender';
import LoginForm from '../LoginForm';

describe('LoginForm', () => {
	test('Test render', () => {
		componentRender(<LoginForm />);
	});
});
