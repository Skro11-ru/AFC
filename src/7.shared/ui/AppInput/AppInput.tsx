import { classNames } from '@src/7.shared/lib/classNames/classNames';
import React, {
	InputHTMLAttributes,
	memo,
	useEffect,
	useRef,
	useState,
} from 'react';
import cls from './AppInput.module.scss';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>;

interface IAppInputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
	type: string;
	autoFocus?: boolean;
}

export const AppInput = memo(
	({
		className,
		value,
		onChange,
		type,
		autoFocus,
		...otherProps
	}: IAppInputProps) => {
		const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
			onChange?.(event.target.value);
		};

		const ref = useRef<HTMLInputElement>(null);
		useEffect(() => {
			if (autoFocus) {
				ref.current?.focus();
			}
		}, [autoFocus]);
		return (
			<div>
				<input
					ref={ref}
					className={classNames([cls.appInput, className ?? ''])}
					type={type}
					onChange={onChangeHandler}
					value={value}
					{...otherProps}
				/>
			</div>
		);
	},
);
