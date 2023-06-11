import './styles/index.scss';
import React, { Suspense, useContext, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTheme } from '@src/1.app/providers/ThemeProvider';
import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { AboutPage } from '@src/3.pages/AboutPage';
import { MainPage } from '@src/3.pages/MainPage';
import { AppRouter } from '@src/1.app/providers/router';
import { Navbar } from '@src/4.widgets/Navbar';
import { Sidebar } from '@src/4.widgets/Sidebar';
export const App = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={classNames(['app', theme], {})}>
			<Navbar />
			<div className="page">
				<Sidebar />
				<AppRouter />
			</div>
		</div>
	);
};
