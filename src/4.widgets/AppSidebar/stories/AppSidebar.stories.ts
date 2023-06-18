import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@src/7.shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@src/1.app/providers/ThemeProvider';
import { AppSidebar } from '../AppSidebar';

type Story = StoryObj<typeof AppSidebar>;

const meta: Meta<typeof AppSidebar> = {
	title: 'widgets/Sidebar',
	component: AppSidebar,
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
