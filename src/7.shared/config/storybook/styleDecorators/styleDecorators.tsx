import '@src/1.app/styles/variables/global.scss';
import '@src/1.app/styles/index.scss';
import { StoryFn } from '@storybook/react';

export const styleDecorators = (StoryComponent: StoryFn) => (
	<div>
		<StoryComponent />
	</div>
);
