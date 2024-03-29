import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@src/7.shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@src/1.app/providers/ThemeProvider';
import { AppInput } from '../AppInput';

type Story = StoryObj<typeof AppInput>;

const meta: Meta<typeof AppInput> = {
	title: 'shared/AppInput',
	component: AppInput,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

export const Light: Story = {
	args: {
		value: 'some value',
	},
};

export const Dark: Story = {
	args: {
		value: 'some value',
	},
	decorators: [themeDecorator(Theme.DARK)],
};
