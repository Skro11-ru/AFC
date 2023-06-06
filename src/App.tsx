import { Counter } from './components/Counter';
import './index.scss';
import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";

export const App = () => {
	return (
		<div className="app">
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
