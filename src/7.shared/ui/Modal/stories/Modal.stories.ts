import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@src/7.shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '@src/1.app/providers/ThemeProvider';
import { Modal } from '../Modal';

type Story = StoryObj<typeof Modal>;

const meta: Meta<typeof Modal> = {
	title: 'shared/Modal',
	component: Modal,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

export const Primary: Story = {
	args: {
		children: 'text',
		isOpen: true,
	},
};

export const Dark: Story = {
	args: {
		children: 'text',
		isOpen: true,
	},
	decorators: [themeDecorator(Theme.DARK)],
};
