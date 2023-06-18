import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from '@src/7.shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@src/1.app/providers/ThemeProvider';
import { AppLoader } from '../AppLoader';

const meta: Meta<typeof AppLoader> = {
	title: 'shared/AppLoader',
	component: AppLoader,
	tags: ['autodocs'],
	argTypes: {},
	args: {},
};

export default meta;
type Story = StoryObj<typeof AppLoader>;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
	decorators: [themeDecorator(Theme.DARK)],
};
