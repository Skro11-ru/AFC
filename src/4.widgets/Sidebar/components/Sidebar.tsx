import { classNames } from '@src/7.shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from '@src/4.widgets/ThemeSwitcher';
import {LangSwitcher} from "@src/4.widgets/LangSwitcher";

interface ISidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const onToggle = () => setCollapsed((prev) => !prev);
	return (
		<div
			className={classNames([cls.sidebar, className ?? ''], {
				[cls.collapsed]: collapsed,
			})}
		>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher/>
				<button onClick={onToggle}>Toggle</button>
			</div>
		</div>
	);
};
