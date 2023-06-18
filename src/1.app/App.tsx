import './styles/index.scss';
import React, { Suspense } from 'react';
import { useTheme } from '@src/1.app/providers/ThemeProvider';
import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { AppRouter } from '@src/1.app/providers/router';
import { Navbar } from '@src/4.widgets/Navbar';
import { AppSidebar } from '@src/4.widgets/AppSidebar';
import { PageLoader } from '@src/4.widgets/PageLoader';

export const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames(['app', theme], {})}>
			<Suspense fallback={<PageLoader />}>
				<Navbar />
				<div className="page">
					{/* @ts-ignore */}
					<AppSidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};
