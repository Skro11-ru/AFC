import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from '@src/7.shared/config/i18n/i18nForTest';
import { MemoryRouter } from 'react-router-dom';
import {StateSchema, StorageProvider} from '@src/1.app/providers/StoreProvider';
import {DeepPartial} from "@reduxjs/toolkit";

export interface ComponentRenderOptions {
	route?: string;
	initialState?: DeepPartial<StateSchema>;
}

const componentRender = (
	component: ReactNode,
	options: ComponentRenderOptions = {},
) => {
	const { route = '/', initialState } = options;
	return render(
		<StorageProvider initialState={initialState}>
			<MemoryRouter initialEntries={[route]}>
				<I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>,
			</MemoryRouter>
			,
		</StorageProvider>,
	);
};

export default componentRender;
