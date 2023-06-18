import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface INotFoundPageProps {
	className?: string;
}

export const NotFoundPage = ({ className }: INotFoundPageProps) => {
	const { t } = useTranslation();
	return (
		<div className={classNames([cls.notFoundPage, className ?? ''])}>
			{t('notFoundPage')}
		</div>
	);
};
