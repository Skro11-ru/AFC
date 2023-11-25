import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useEffect, useState } from 'react';
import { AppButton } from '@src/7.shared/ui/AppButton';
import { Modal } from '@src/7.shared/ui/Modal';
import { AppButtonTheme } from '@src/7.shared/ui/AppButton/components/AppButton';
import { LoginModal } from '@src/5.features/AuthByUsername';
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

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onOpenModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	return (
		<div className={classNames([cls.navbar, className ?? ''])}>
			<div className={classNames([cls.links])}>
				{/* eslint-disable-next-line i18next/no-literal-string */}
				<AppButton onClick={generateThrow}>{t('Bug')}</AppButton>
				<AppButton theme={AppButtonTheme.CLEAR_INVERTED} onClick={onOpenModal}>
					{t('Войти')}
				</AppButton>
			</div>
			{/* eslint-disable-next-line i18next/no-literal-string */}
				<LoginModal onClose={onCloseModal} isOpen={isAuthModal} />
		</div>
	);
};
