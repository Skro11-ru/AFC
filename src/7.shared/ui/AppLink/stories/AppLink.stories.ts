import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from '../AppLink';
import { themeDecorator } from '@src/7.shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@src/1.app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
	title: 'shared/AppLink',
	component: AppLink,
	tags: ['autodocs'],
	argTypes: {},
	args: {
		to: '/',
	},
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
	args: {
		children: 'text',
		theme: AppLinkTheme.PRIMARY,
	},
};

export const PrimaryDark: Story = {
	args: {
		children: 'text',
		theme: AppLinkTheme.PRIMARY,
	},
	decorators: [themeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
	args: {
		children: 'text',
		theme: AppLinkTheme.SECONDARY,
	},
};

export const SecondaryDark: Story = {
	args: {
		children: 'text',
		theme: AppLinkTheme.SECONDARY,
	},
	decorators: [themeDecorator(Theme.DARK)],
};
