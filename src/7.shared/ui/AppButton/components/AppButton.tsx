import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './AppButton.module.scss';

export enum AppButtonTheme {
	CLEAR = 'clear',
	SECONDARY = 'secondary',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'background-inverted',
}

export enum AppButtonSize {
	S = 'size-l',
	M = 'size-m',
	L = 'size-l',
}

interface IAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: AppButtonTheme;
	square?: boolean;
	size?: AppButtonSize;
}

export const AppButton: FC<IAppButtonProps> = (props) => {
	const {
		className,
		children,
		theme,
		square = false,
		size = AppButtonSize.M,
		...otherProps
	} = props;

	const mods: Record<string, boolean> = {
		[cls[theme!]]: true,
		[cls.square]: square ?? false,
		[cls[size]]: !!size, // updated to use double negation to ensure a boolean value
	};
	console.log(`########################## AppButton ##### ${42}\n`, mods);

	return (
		<button
			type="button"
			className={classNames([cls.appButton, className ?? ''], mods)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...otherProps}
		>
			{children}
		</button>
	);
};
