import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}
// type AppLinkTheme = 'primary' | 'secondary';

interface IAppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = (props) => {
	const {
		className,
		children,
		to,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props;
	return (
		<Link
			to={to}
			className={classNames([cls.appLink, className ?? '', cls[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	);
};
