import React from 'react';
import { IRoutesList, routerConfig } from '@src/1.app/providers/router/routerConfig';
import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { AppLink } from '@src/7.shared/ui/AppLink';
import { AppLinkTheme } from '@src/7.shared/ui/AppLink/AppLink';

export const RouterLink = () => (
    <ul className={classNames(['links'])}>
      {routerConfig.map(({ path, name }: IRoutesList) => (
        <li className={classNames(['link'])}>
          <AppLink key={path} to={path} theme={AppLinkTheme.SECONDARY}>
            {name}
          </AppLink>
        </li>
      ))}
    </ul>
  );
