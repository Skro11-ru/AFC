import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { AppLink } from '@src/7.shared/ui/AppLink';
import { AppLinkTheme } from '@src/7.shared/ui/AppLink/components/AppLink';
import { ThemeSwitcher } from '@src/4.widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import { useEffect, useState } from 'react';
import { AppButton } from '@src/7.shared/ui/AppButton';

interface INavbarProps {
	className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
	const { t } = useTranslation('navbar');
	const [error, setError] = useState(false);
	const generateThrow = () => setError(true);
	useEffect(() => {
		if (error) {
			throw new Error();
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
