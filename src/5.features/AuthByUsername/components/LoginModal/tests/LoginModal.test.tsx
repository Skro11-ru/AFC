import componentRender from "@src/7.shared/lib/tests/componentRender/componentRender";
import { LoginModal } from '../LoginModal';

describe('LoginModal', () => {
	test('Test render', () => {
		componentRender(<LoginModal isOpen onClose={() => true} />);
	});
});
