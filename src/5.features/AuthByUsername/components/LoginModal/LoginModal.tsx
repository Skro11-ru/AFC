import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { Modal } from '@src/7.shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

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
			<LoginForm />
		</Modal>
	);
};
