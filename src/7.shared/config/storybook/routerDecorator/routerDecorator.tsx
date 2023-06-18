import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const routerDecorator = (StoryComponent: StoryFn) => (
	<BrowserRouter>
		<StoryComponent />
	</BrowserRouter>
);
