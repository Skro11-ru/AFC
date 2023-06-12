import { classNames } from '@src/7.shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import React, { Suspense } from 'react';
import { AppButton } from '@src/7.shared/ui/AppButton';
import { AppButtonTheme } from '@src/7.shared/ui/AppButton/components/AppButton';
import { Theme } from '@src/1.app/providers/ThemeProvider';
import DarkIcon from '@src/7.shared/assets/icons/theme-dark.svg';
import LightIcon from '@src/7.shared/assets/icons/theme-light.svg';

interface ILangSwitcherProps {
	className?: string;
}

function MyComponent() {
	const { t, i18n } = useTranslation();

	return <h1>{t('greeting')}</h1>;
}

export const LangSwitcher = ({ className }: ILangSwitcherProps) => {
	const toggleLang = async () => {
		await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};
	const { t, i18n } = useTranslation();
	return (
		<AppButton
			className={classNames([cls.langSwitcher, className ?? ''])}
			theme={AppButtonTheme.CLEAR}
			onClick={toggleLang}
		>
			{t('lang')}

		</AppButton>
	);
};
