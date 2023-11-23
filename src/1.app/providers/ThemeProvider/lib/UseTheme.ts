import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
	theme: Theme;
	toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
	const { setTheme, theme } = useContext(ThemeContext);

	const toggleTheme = () => {
		const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
		setTheme?.(newTheme);
		document.body.className = newTheme;
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return {
		theme:
			theme ??
			(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ??
			Theme.LIGHT,
		toggleTheme,
	};
};
