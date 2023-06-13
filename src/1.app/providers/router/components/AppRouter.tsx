// TODO: почему не shared???? Ведь нельзя использовать вышестоящие слови в нижестоящих
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {PageLoader} from "@src/4.widgets/PageLoader";
import { routerConfig, IRoutesList } from '../routerConfig';

export const AppRouter = () => (
	<div className="page-content">
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{routerConfig.map(({ path, Component }: IRoutesList) => (
					<Route key={path} path={path} element={<Component />} />
				))}

				{/* <Route path="*" element={<Error404 />} /> */}
			</Routes>
		</Suspense>
	</div>
);
