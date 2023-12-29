import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@src/7.shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@src/1.app/providers/ThemeProvider';
import { AppButton, AppButtonSize, AppButtonTheme } from '../AppButton';

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

export const ClearInverted: Story = {
	args: {
		children: 'text',
		theme: AppButtonTheme.BACKGROUND_INVERTED,
	},
};

export const Secondary: Story = {
	args: {
		children: 'text',
		theme: AppButtonTheme.SECONDARY,
	},
};

export const Outline: Story = {
	args: {
		children: 'text',
		theme: AppButtonTheme.OUTLINE,
	},
};

export const OutlineSizeS: Story = {
	args: {
		children: 'text',
		theme: AppButtonTheme.OUTLINE,
		size: AppButtonSize.S,
	},
};

export const OutlineSizeM: Story = {
	args: {
		children: 'text',
		theme: AppButtonTheme.OUTLINE,
		size: AppButtonSize.M,
	},
};

export const OutlineSizeL: Story = {
	args: {
		children: 'text',
		theme: AppButtonTheme.OUTLINE,
		size: AppButtonSize.L,
	},
};

export const OutlineDark: Story = {
	args: {
		children: 'text',
		theme: AppButtonTheme.OUTLINE,
	},
	decorators: [themeDecorator(Theme.DARK)],
};

export const BackgroundTheme: Story = {
	args: {
		children: 'text',
		theme: AppButtonTheme.BACKGROUND,
	},
	decorators: [themeDecorator(Theme.DARK)],
};

export const BackgroundInverted: Story = {
	args: {
		children: 'text',
		theme: AppButtonTheme.BACKGROUND_INVERTED,
	},
	decorators: [themeDecorator(Theme.DARK)],
};

export const Square: Story = {
	args: {
		children: '>',
		theme: AppButtonTheme.BACKGROUND_INVERTED,
		square: true,
	},
	decorators: [themeDecorator(Theme.DARK)],
};

export const SquareSizeS: Story = {
	args: {
		children: '>',
		theme: AppButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: AppButtonSize.S,
	},
	decorators: [themeDecorator(Theme.DARK)],
};
export const SquareSizeM: Story = {
	args: {
		children: '>',
		theme: AppButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: AppButtonSize.M,
	},
	decorators: [themeDecorator(Theme.DARK)],
};

export const SquareSizeL: Story = {
	args: {
		children: '>',
		theme: AppButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: AppButtonSize.L,
	},
	decorators: [themeDecorator(Theme.DARK)],
};

export const Disabled: Story = {
	args: {
		children: '>',
		theme: AppButtonTheme.OUTLINE,
		disabled: true,
	},
	decorators: [themeDecorator(Theme.DARK)],
};
