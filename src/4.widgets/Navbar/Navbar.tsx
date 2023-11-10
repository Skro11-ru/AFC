import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useEffect, useState } from 'react';
import { AppButton } from '@src/7.shared/ui/AppButton';
import { Modal } from '@src/7.shared/ui/Modal';
import { AppButtonTheme } from '@src/7.shared/ui/AppButton/components/AppButton';
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
	const [isAuthModal, setIsAuthModal] = React.useState(false);

	const toggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);

	return (
		<div className={classNames([cls.navbar, className ?? ''])}>
			<div className={classNames([cls.links])}>
				{/* eslint-disable-next-line i18next/no-literal-string */}
				<AppButton onClick={generateThrow}>{t('Bug')}</AppButton>
				<AppButton theme={AppButtonTheme.CLEAR_INVERTED} onClick={toggleModal}>
					{t('Войти')}
				</AppButton>
			</div>
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<Modal isOpen={isAuthModal} onClose={toggleModal}>
				pass
			</Modal>
		</div>
	);
};
