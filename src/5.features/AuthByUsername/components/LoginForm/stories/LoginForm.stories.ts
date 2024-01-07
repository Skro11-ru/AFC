import type { Meta, StoryObj } from '@storybook/react';

import { storeDecorator } from '@src/7.shared/config/storybook/storeDecorator/storeDecorator';
import LoginForm from '../LoginForm';

type Story = StoryObj<typeof LoginForm>;

const meta: Meta<typeof LoginForm> = {
	title: 'features /LoginForm',
	component: LoginForm,
	argTypes: {},
};

export default meta;

export const Primary: Story = {
	args: {},
	decorators: [
		storeDecorator({
			loginForm: {
				username: '123',
				password: 'asd',
				error: '',
				isLoading: false,
			},
		}),
	],
};

export const withError: Story = {
	args: {},
	decorators: [
		storeDecorator({
			loginForm: {
				username: '123',
				password: 'asd',
				error: 'ERROR',
				isLoading: false,
			},
		}),
	],
};

export const Loading: Story = {
	args: {},
	decorators: [
		storeDecorator({
			loginForm: {
				username: '123',
				password: 'asd',
				error: '',
				isLoading: true,
			},
		}),
	],
};
