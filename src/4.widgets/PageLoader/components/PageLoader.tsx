import { classNames } from '@src/7.shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import { AppLoader } from '@src/7.shared/ui/AppLoader';

interface IPageLoaderProps {
	className?: string;
}

export const PageLoader = ({ className }: IPageLoaderProps) => {
	return (
		<div className={classNames([cls.pageLoader, className ?? ''])}>
			<AppLoader />
		</div>
	);
};
