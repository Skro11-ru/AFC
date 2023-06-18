import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from '@src/4.widgets/ThemeSwitcher';
import { LangSwitcher } from '@src/4.widgets/LangSwitcher';
import { AppButton } from '@src/7.shared/ui/AppButton';
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
				<AppButton data-testid="sidebar-toggle" onClick={onToggle}>
					Toggle
				</AppButton>
			</div>
		</div>
	);
};