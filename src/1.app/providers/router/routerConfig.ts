import React from 'react';
import { AboutPage } from '@src/3.pages/AboutPage';
import { MainPage } from '@src/3.pages/MainPage';
import { NotFoundPage } from '@src/3.pages/NotFoundPage';

export enum AppRoutesPaths {
	MAIN = '/',
	ABOUT = '/about',
	NOT_FOUND = '*',
}

export interface IRoutesList {
	path: string;
	name: string;
	Component: React.FC<any>;
}

export const routerConfig: IRoutesList[] = [
	{
		path: AppRoutesPaths.MAIN,
		name: 'Главная',
		Component: MainPage,
	},
	{
		path: AppRoutesPaths.ABOUT,
		name: 'О сайте',
		Component: AboutPage,
	},
	{
		path: AppRoutesPaths.NOT_FOUND,
		name: 'Страница не найдена',
		Component: NotFoundPage,
	},
];
