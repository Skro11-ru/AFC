import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { AppLoader } from '@src/7.shared/ui/AppLoader';
import cls from './PageLoader.module.scss';

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
