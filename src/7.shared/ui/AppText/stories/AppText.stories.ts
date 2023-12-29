import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@src/7.shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@src/1.app/providers/ThemeProvider';
import { AppText, TextTheme } from '../AppText';

type Story = StoryObj<typeof AppText>;

const meta: Meta<typeof AppText> = {
	title: 'shared/AppText',
	component: AppText,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

export const PrimaryDark: Story = {
	args: {
		title: 'Some title for primary dark',
		text: 'Some text',
	},
	decorators: [themeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
	args: {
		title: 'Some title for only title dark',
	},
	decorators: [themeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
	args: {
		text: 'Some text for only text dark',
	},
	decorators: [themeDecorator(Theme.DARK)],
};

//
export const PrimaryLight: Story = {
	args: {
		title: 'Some title for primary light',
		text: 'Some text',
	},
	decorators: [themeDecorator(Theme.LIGHT)],
};

export const OnlyTitleLight: Story = {
	args: {
		title: 'Some title for only title light',
	},
	decorators: [themeDecorator(Theme.LIGHT)],
};

export const OnlyTextLight: Story = {
	args: {
		text: 'Some text',
	},
	decorators: [themeDecorator(Theme.LIGHT)],
};

export const Error: Story = {
	args: {
		title: 'Some text',
		text: 'Some text',
		theme: TextTheme.ERROR,
	},
	decorators: [themeDecorator(Theme.LIGHT)],
};
