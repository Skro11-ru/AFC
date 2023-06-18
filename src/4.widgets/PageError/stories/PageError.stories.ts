import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@src/7.shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@src/1.app/providers/ThemeProvider';
import { PageError } from '../PageError';

const meta: Meta<typeof PageError> = {
	title: 'widgets/PageError',
	component: PageError,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
	decorators: [themeDecorator(Theme.DARK)],
};
