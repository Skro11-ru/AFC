import type { Preview } from '@storybook/react';
import { styleDecorators } from '../../src/7.shared/config/storybook/styleDecorators/styleDecorators';
import { themeDecorator } from '../../src/7.shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '../../src/1.app/providers/ThemeProvider';
import { routerDecorator } from '../../src/7.shared/config/storybook/routerDecorator/routerDecorator';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [styleDecorators, themeDecorator(Theme.LIGHT), routerDecorator],
};

export default preview;
