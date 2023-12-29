import React, { Suspense, useEffect } from 'react';
import { useTheme } from '@src/1.app/providers/ThemeProvider';
import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { AppRouter } from '@src/1.app/providers/router';
import { Navbar } from '@src/4.widgets/Navbar';
import { AppSidebar } from '@src/4.widgets/AppSidebar';
import { PageLoader } from '@src/4.widgets/PageLoader';
import { useDispatch } from 'react-redux';
import { userActions } from '@src/6.entities/User';

export const App = () => {
	const { theme } = useTheme();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(userActions.initAuthData);
	}, [dispatch]);
	return (
		<div className={classNames(['app', theme], {})}>
			<Suspense fallback="">
				<Navbar />
				<div className="page">
					<AppSidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};
