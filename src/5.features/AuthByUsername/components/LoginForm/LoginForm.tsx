import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from '@src/7.shared/ui/AppButton';
import { AppInput } from '@src/7.shared/ui/AppInput';
import { AppButtonTheme } from '@src/7.shared/ui/AppButton/components/AppButton';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppText } from '@src/7.shared/ui/AppText';
import { TextTheme } from '@src/7.shared/ui/AppText/AppText';
import {
	DynamicModuleLoader,
	ReducersList,
} from '@src/7.shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

export interface ILoginFormProps {
	className?: string;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
};

const LoginForm = memo(({ className }: ILoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const isLoading = useSelector(getLoginIsLoading);
	const error = useSelector(getLoginError);
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
		<DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
		</DynamicModuleLoader>
	);
});

export default LoginForm;
