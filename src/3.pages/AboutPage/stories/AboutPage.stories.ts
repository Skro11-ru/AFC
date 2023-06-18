import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from '@src/7.shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@src/1.app/providers/ThemeProvider';
import AboutPage from '../AboutPage';

const meta: Meta<typeof AboutPage> = {
	title: 'pages/AboutPage',
	component: AboutPage,
	tags: ['autodocs'],
	argTypes: {},
	args: {},
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
	decorators: [themeDecorator(Theme.DARK)],
};
