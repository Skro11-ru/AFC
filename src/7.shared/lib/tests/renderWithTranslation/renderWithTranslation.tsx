import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import i18nForTest from '../../../config/i18n/i18nForTest';
import { I18nextProvider } from 'react-i18next';
const RenderWithTranslation = (component: ReactNode) => {
	return render(
		<I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>,
	);
};

export default RenderWithTranslation;
