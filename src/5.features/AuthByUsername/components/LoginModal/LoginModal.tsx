import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { Modal } from '@src/7.shared/ui/Modal';
import { Suspense } from 'react';
import {AppLoader} from "@src/7.shared/ui/AppLoader";
import cls from './LoginModal.module.scss';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

interface ILoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal = ({
	className,
	onClose,
	isOpen,
}: ILoginModalProps) => {
	return (
		<Modal
			className={classNames([cls.loginModal, className ?? ''])}
			isOpen={isOpen}
			onClose={onClose}
			lazy
		>
			<Suspense fallback={<AppLoader/>}>
				<LoginFormLazy />
			</Suspense>
		</Modal>
	);
};
