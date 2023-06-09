import { classNames } from '@src/7.shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink } from '@src/7.shared/ui/AppLink';
import { AppLinkTheme } from '@src/7.shared/ui/AppLink/components/AppLink';

interface INavbarProps {
	className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
	return (
		<div className={classNames([cls.navbar, className ?? ''])}>
			<div className={classNames([cls.links])}></div>
			<AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
				Главная
			</AppLink>
			<AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
				Обо мне
			</AppLink>
		</div>
	);
};
