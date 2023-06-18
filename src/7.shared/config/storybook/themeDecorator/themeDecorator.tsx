import { StoryFn } from '@storybook/react';
import { Theme } from '@src/1.app/providers/ThemeProvider';

export const themeDecorator = (theme: Theme) => (StoryComponent: StoryFn) =>
	(
		<div className={`app ${theme}`}>
			<StoryComponent />
		</div>
	);
