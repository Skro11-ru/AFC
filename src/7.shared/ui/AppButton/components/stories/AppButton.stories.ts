import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@src/7.shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@src/1.app/providers/ThemeProvider';
import { AppButton, AppButtonTheme } from '../AppButton';

const meta: Meta<typeof AppButton> = {
	title: 'shared/Button',
	component: AppButton,
	tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
};

export default meta;
type Story = StoryObj<typeof AppButton>;

export const Primary: Story = {
	args: {
		children: 'text',
	},
};

export const Clear: Story = {
	args: {
		children: 'text',
		theme: AppButtonTheme.CLEAR,
	},
};

export const Secondary: Story = {
	args: {
		children: 'text',
		theme: AppButtonTheme.SECONDARY,
	},
};

export const OutlineDark: Story = {
	args: {
		children: 'text',
		theme: AppButtonTheme.OUTLINE,
	},
	decorators: [themeDecorator(Theme.DARK)],
};
