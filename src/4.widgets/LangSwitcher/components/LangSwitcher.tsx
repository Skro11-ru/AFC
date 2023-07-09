import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from '@src/7.shared/ui/AppButton';
import {
	AppButtonSize,
	AppButtonTheme,
} from '@src/7.shared/ui/AppButton/components/AppButton';
import cls from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
	className?: string;
	short?: boolean;
}

export const LangSwitcher = ({ className, short }: ILangSwitcherProps) => {
	const { t, i18n } = useTranslation();
	const toggleLang = async () => {
		await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};
	return (
		<AppButton
			className={classNames([cls.langSwitcher, className ?? ''])}
			theme={AppButtonTheme.CLEAR}
			onClick={toggleLang}
			size={short ? AppButtonSize.M : AppButtonSize.S}
			square={short}
		>
			{t(short ? 'shortLang' : 'lang')}
		</AppButton>
	);
};
