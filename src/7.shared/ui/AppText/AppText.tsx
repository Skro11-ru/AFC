import { classNames } from '@src/7.shared/lib/classNames/classNames';
import cls from './AppText.module.scss';

export enum TextTheme {
	PRIMARY = 'primary',
	ERROR = 'error',
}

interface IAppTextProps {
	className?: string;
	title?: string;
	text?: string;
	theme?: TextTheme;
}

export const AppText = (props: IAppTextProps) => {
	const { className, text, title, theme = TextTheme.PRIMARY } = props;
	return (
		<div
			className={classNames([cls.appText, className ?? ''], {
				[cls[theme]]: true,
			})}
		>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	);
};
