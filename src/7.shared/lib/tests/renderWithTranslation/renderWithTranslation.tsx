import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from '@src/7.shared/config/i18n/i18nForTest';

const RenderWithTranslation = (component: ReactNode) => {
	return render(
		<I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>,
	);
};

export default RenderWithTranslation;
