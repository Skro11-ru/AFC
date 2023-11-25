import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from '@src/7.shared/ui/AppButton';
import { AppInput } from '@src/7.shared/ui/AppInput';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
	className?: string;
}

export const LoginForm = ({ className }: ILoginFormProps) => {
	const { t } = useTranslation();
	return (
		<div className={classNames([cls.loginForm, className ?? '', '123'])}>
			<AppInput className={cls.input} type="text" />
			<AppInput className={cls.input} type="text" />
			<AppButton className={cls.loginBtn}> {t('Войти')}</AppButton>
		</div>
	);
};
