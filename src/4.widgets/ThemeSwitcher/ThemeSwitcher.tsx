import {classNames} from '@src/7.shared/lib/classNames/classNames';
import {Theme, useTheme} from '@src/1.app/providers/ThemeProvider';
import DarkIcon from '@src/7.shared/assets/icons/theme-dark.svg';
import LightIcon from '@src/7.shared/assets/icons/theme-light.svg';
import {AppButton, AppButtonSize, AppButtonTheme,} from '@src/7.shared/ui/AppButton/components/AppButton';
import React from 'react';
import cls from './ThemeSwitcher.module.scss';

interface IThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<AppButton
			className={classNames([cls.themeSwitcher, className ?? ''])}
			theme={AppButtonTheme.CLEAR}
			onClick={toggleTheme}
			size={AppButtonSize.M}
			square

		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</AppButton>
	);
};
