import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@src/7.shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@src/1.app/providers/ThemeProvider';
import { LoginForm } from '../LoginForm';

type Story = StoryObj<typeof LoginForm>;

const meta: Meta<typeof LoginForm> = {
	title: 'widgets/LoginForm',
	component: LoginForm,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
	decorators: [themeDecorator(Theme.DARK)],
};
