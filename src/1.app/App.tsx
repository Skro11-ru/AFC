import './styles/index.scss';
import React, {
	ButtonHTMLAttributes,
	Suspense,
	useContext,
	useState,
} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTheme } from '@src/1.app/providers/ThemeProvider';
import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { AboutPage } from '@src/3.pages/AboutPage';
import { MainPage } from '@src/3.pages/MainPage';
import { AppRouter } from '@src/1.app/providers/router';
import { Navbar } from '@src/4.widgets/Navbar';
import { Sidebar } from '@src/4.widgets/Sidebar';
import { useTranslation } from 'react-i18next';
import i18n, { changeLanguage } from 'i18next';

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames(['app', theme], {})}>
			<Suspense fallback="loading lang">
				<Navbar />
				<div className="page">
					{/*@ts-ignore*/}
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};
