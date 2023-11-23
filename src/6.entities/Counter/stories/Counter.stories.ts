import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@src/7.shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@src/1.app/providers/ThemeProvider';
import { Counter } from '../Counter';

type Story = StoryObj<typeof Counter>;

const meta: Meta<typeof Counter> = {
	title: 'widgets/Counter',
	component: Counter,
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
