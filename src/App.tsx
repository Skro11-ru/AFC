import { Counter } from './components/Counter';
import './styles/index.scss';
import React, { Suspense, useContext, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/UseTheme';

export const App = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={`app ${theme}`}>
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
