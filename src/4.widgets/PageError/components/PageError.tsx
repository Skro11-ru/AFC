import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from '@src/7.shared/ui/AppButton';
import cls from './PageError.module.scss';

interface IPageErrorProps {
	className?: string;
}
const reloadPage = () => {
	window.location.reload();
};
export const PageError = ({ className }: IPageErrorProps) => {
	const { t } = useTranslation();

	return (
		<div className={classNames([cls.pageError, className ?? ''])}>
			{t('messageAfterError')}
			<AppButton onClick={reloadPage}>{t('buttonReload')}</AppButton>
		</div>
	);
};
