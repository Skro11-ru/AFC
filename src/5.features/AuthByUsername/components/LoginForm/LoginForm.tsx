import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from '@src/7.shared/ui/AppButton';
import { AppInput } from '@src/7.shared/ui/AppInput';
import { AppButtonTheme } from '@src/7.shared/ui/AppButton/components/AppButton';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppText } from '@src/7.shared/ui/AppText';
import { TextTheme } from '@src/7.shared/ui/AppText/AppText';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';

interface ILoginFormProps {
	className?: string;
}

export const LoginForm = memo(({ className }: ILoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { username, password, isLoading, error } = useSelector(getLoginState);
	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value));
		},
		[dispatch],
	);
	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value));
		},
		[dispatch],
	);
	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, password, username]);
	return (
		<div className={classNames([cls.loginForm, className ?? '', ''])}>
			<AppText title={t('authorizationForm')} />
			{error && <AppText text={error} theme={TextTheme.ERROR} />}
			<AppInput
				className={cls.input}
				type="text"
				onChange={onChangeUsername}
				placeholder={t('enterLogin')}
				value={username}
			/>
			<AppInput
				className={cls.input}
				type="text"
				onChange={onChangePassword}
				placeholder={t('enterPassword')}
				value={password}
			/>
			<AppButton
				className={cls.loginBtn}
				theme={AppButtonTheme.OUTLINE}
				onClick={onLoginClick}
				disabled={isLoading}
			>
				{t('login')}
			</AppButton>
		</div>
	);
});
