import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { AppLink } from '@src/7.shared/ui/AppLink';
import { AppLinkTheme } from '@src/7.shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { AppButton } from '@src/7.shared/ui/AppButton';
import cls from './Navbar.module.scss';

interface INavbarProps {
	className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
	const { t } = useTranslation('navbar');
	const [error, setError] = useState(false);
	const generateThrow = () => setError(true);
	useEffect(() => {
		if (error) {
			throw new Error('Error App');
		}
	}, [error]);
	return (
		<div className={classNames([cls.navbar, className ?? ''])}>
			<div className={classNames([cls.links])}>
				<AppLink theme={AppLinkTheme.SECONDARY} to="/">
					{t('mainPage')}
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to="/about">
					{t('aboutPage')}
				</AppLink>
				{/* eslint-disable-next-line i18next/no-literal-string */}
				<AppButton onClick={generateThrow}>Bug</AppButton>
			</div>
		</div>
	);
};
