import { classNames } from '@src/7.shared/lib/classNames/classNames';
import cls from './AppLoader.module.scss';

interface IAppLoaderProps {
	className?: string;
}

export const AppLoader = ({ className }: IAppLoaderProps) => {
	return (
		<div
			className={classNames([
				cls.appLoader,
				cls['lds-spinner'],
				className ?? '',
			])}
		>
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</div>
	);
};
