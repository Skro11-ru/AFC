import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@src/7.shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@src/1.app/providers/ThemeProvider';
import { LoginModal } from '../LoginModal';

type Story = StoryObj<typeof LoginModal>;

const meta: Meta<typeof LoginModal> = {
	title: 'widgets/LoginModal',
	component: LoginModal,
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
