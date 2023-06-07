import { Counter } from './components/Counter';
import './styles/index.scss';
import React, { Suspense, useContext, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { useTheme } from './theme/UseTheme';
import { classNames } from './helpers/classNames/classNames';

export const App = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={classNames(['app', theme], {})}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>Обо мне</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPageLazy />} />
					<Route path={'/'} element={<MainPageLazy />} />
				</Routes>
			</Suspense>
			App
			<Counter />
		</div>
	);
};
