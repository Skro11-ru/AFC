import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from '@src/4.widgets/ThemeSwitcher';
import { LangSwitcher } from '@src/4.widgets/LangSwitcher';
import { AppButton } from '@src/7.shared/ui/AppButton';
import {
	AppButtonSize,
	AppButtonTheme,
} from '@src/7.shared/ui/AppButton/components/AppButton';
import cls from './AppSidebar.module.scss';
import { AppLink } from '@src/7.shared/ui/AppLink';
import { AppLinkTheme } from '@src/7.shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { AppRoutesPaths } from '@src/1.app/providers/router/routerConfig';
import HomeIcon from '@src/7.shared/assets/icons/home.svg';
import AboutIcon from '@src/7.shared/assets/icons/about.svg';

interface IAppSidebarProps {
	className?: string;
}

export const AppSidebar = ({ className }: IAppSidebarProps) => {
	const { t } = useTranslation('navbar');
	const [collapsed, setCollapsed] = useState(false);
	const onToggle = () => setCollapsed((prev) => !prev);
	return (
		<div
			data-testid="sidebar"
			className={classNames([cls.sidebar, className ?? ''], {
				[cls.collapsed]: collapsed,
			})}
		>
			{' '}
			<AppButton
				theme={AppButtonTheme.BACKGROUND_INVERTED}
				className={cls['collapse-button']}
				data-testid="sidebar-toggle"
				onClick={onToggle}
				size={AppButtonSize.M}
				square
			>
				{collapsed ? '>' : '<'}
			</AppButton>
			<div className={classNames([cls.links])}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={AppRoutesPaths.MAIN}
					className={cls.link}
				>
					<HomeIcon  className={cls.icon} />
					<span className={cls.label}>{t('mainPage')}</span>
				</AppLink>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={AppRoutesPaths.ABOUT}
					className={cls.link}
				>
					<AboutIcon className={cls.icon} />
					<span className={cls.label}>{t('aboutPage')}</span>
				</AppLink>
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} />
			</div>
		</div>
	);
};
