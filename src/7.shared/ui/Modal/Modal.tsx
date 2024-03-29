import { classNames } from '@src/7.shared/lib/classNames/classNames';
import React, { ReactNode, useCallback, useEffect, useRef } from 'react';
import { Portal } from '@src/7.shared/ui/Portal';
import { useTheme } from '@src/1.app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface IModalProps {
	className?: string;
	children?: ReactNode;
	isOpen: boolean;
	onClose?: () => void;
	lazy?: boolean;
}

const ANIMATION_DELAY = 300;

const onContentClick = (e: React.MouseEvent) => {
	e.stopPropagation();
};
export const Modal = ({
	className,
	children,
	onClose,
	isOpen,
	lazy,
}: IModalProps) => {
	const [isClosing, setIsClosing] = React.useState(false);
	const [mounted, setMounted] = React.useState(false);
	const timeRef = useRef<ReturnType<typeof setTimeout>>();
	const { theme } = useTheme();

	useEffect(() => {
		if (isOpen) {
			setMounted(true);
		}
	}, [isOpen]);

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.closing]: isClosing,
	};

	const closeHandler = useCallback(() => {
		setIsClosing(true);
		if (onClose) {
			timeRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	const onKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (event.code === 'Escape' && onClose) {
				closeHandler();
			}
		},
		[closeHandler, onClose],
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}
		return () => {
			clearTimeout(timeRef.current as ReturnType<typeof setTimeout>);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	if (lazy && !mounted) {
		return null;
	}
	return (
		<Portal>
			<div className={classNames([cls.modal, className ?? ''], mods)}>
				{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
				<div className={cls.overlay} onClick={closeHandler}>
					{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
					<div className={cls.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
