// TODO: почему не shared???? Ведь нельзя использовать вышестоящие слови в нижестоящих
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig, IRoutesList } from '../routerConfig';

export const AppRouter = () => {
  return (
    <div className={'page-wrapper'}>
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
            {routerConfig.map(({ path, Component }: IRoutesList) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            {/* <Route path="*" element={<Error404 />} /> */}


        </Routes>
      </Suspense>
    </div>
  );
};
