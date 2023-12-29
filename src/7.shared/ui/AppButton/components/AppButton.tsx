import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './AppButton.module.scss';

export enum AppButtonTheme {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clear-inverted',
	SECONDARY = 'secondary',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'background-inverted',
}

export enum AppButtonSize {
	S = 'size-s',
	M = 'size-m',
	L = 'size-l',
}

interface IAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: AppButtonTheme;
	square?: boolean;
	size?: AppButtonSize;
	disabled?: boolean;
}

export const AppButton: FC<IAppButtonProps> = (props) => {
	const {
		className,
		children,
		theme,
		square = false,
		size = AppButtonSize.M,
		disabled,
		...otherProps
	} = props;

	const mods: Record<string, boolean> = {
		[cls[theme!]]: true,
		[cls.square]: square ?? false,
		[cls[size]]: !!size,
		[cls.disabled]: disabled ?? false,
	};

	return (
		<button
			type="button"
			className={classNames([cls.appButton, className ?? ''], mods)}
			disabled={disabled}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...otherProps}
		>
			{children}
		</button>
	);
};
