import './styles/index.scss';
import React, { Suspense } from 'react';
import { useTheme } from '@src/1.app/providers/ThemeProvider';
import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { AppRouter } from '@src/1.app/providers/router';
import { Navbar } from '@src/4.widgets/Navbar';
import { Sidebar } from '@src/4.widgets/Sidebar';

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames(['app', theme], {})}>
			<Suspense fallback="loading lang">
				<Navbar />
				<div className="page">
					{/* @ts-ignore */}
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};
