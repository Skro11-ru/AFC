import React from 'react';
import { AboutPage } from '@src/3.pages/AboutPage';
import { MainPage } from '@src/3.pages/MainPage';

export interface IRoutesList {
	path: string;
	name: string;
	Component: React.FC;
}

export const routerConfig: IRoutesList[] = [
	{
		path: '/',
		name: 'Главная',
		Component: MainPage,
	},
	{
		path: '/about',
		name: 'О сайте',
		Component: AboutPage,
	},
];