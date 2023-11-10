import { StoryFn } from '@storybook/react';
import { Theme } from '@src/1.app/providers/ThemeProvider';
import ThemeProvider from "@src/1.app/providers/ThemeProvider/ui/ThemeProvider";

export const themeDecorator = (theme: Theme) => (StoryComponent: StoryFn) =>
	(
		<ThemeProvider initialTheme={theme}>
			<div className={`app ${theme}`}>
				<StoryComponent />
			</div>
		</ThemeProvider>
	);
