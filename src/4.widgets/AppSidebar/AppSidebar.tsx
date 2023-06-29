import {classNames} from '@src/7.shared/lib/classNames/classNames';
import {useState} from 'react';
import {ThemeSwitcher} from '@src/4.widgets/ThemeSwitcher';
import {LangSwitcher} from '@src/4.widgets/LangSwitcher';
import {AppButton} from '@src/7.shared/ui/AppButton';
import {AppButtonSize, AppButtonTheme} from '@src/7.shared/ui/AppButton/components/AppButton';
import cls from './AppSidebar.module.scss';

interface IAppSidebarProps {
	className?: string;
}

export const AppSidebar = ({ className }: IAppSidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const onToggle = () => setCollapsed((prev) => !prev);
	return (
		<div
			data-testid="sidebar"
			className={classNames([cls.sidebar, className ?? ''], {
				[cls.collapsed]: collapsed,
			})}
		>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
				<AppButton
					theme={AppButtonTheme.BACKGROUND_INVERTED}
					className={cls['collapse-button']}
					data-testid="sidebar-toggle"
					onClick={onToggle}
					size={AppButtonSize.M}
				>
					{collapsed ? '>' : '<'}
				</AppButton>
			</div>
		</div>
	);
};
