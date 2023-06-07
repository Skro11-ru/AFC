import './styles/index.scss';
import React, { Suspense, useContext, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useTheme } from '@src/1.app/providers/ThemeProvider';
import {classNames} from "@src/7.shared/lib/classNames/classNames";
import {AboutPage} from "@src/3.pages/AboutPage";
import {MainPage} from "@src/3.pages/MainPage";


export const App = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={classNames(['app', theme], {})}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>Обо мне</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPage />} />
					<Route path={'/'} element={<MainPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};
