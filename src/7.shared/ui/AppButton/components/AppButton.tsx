import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './AppButton.module.scss';

export enum AppButtonTheme {
  CLEAR = 'clear',
  SECONDARY = 'secondary',
}

interface IAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: AppButtonTheme;
}

export const AppButton: FC<IAppButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button className={classNames([cls.appButton, className??'', cls[theme??'']])} {...otherProps}>
      {children}
    </button>
  );
};
