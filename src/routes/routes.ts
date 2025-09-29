import React from 'react';

import HomePage from '../pages/HomePage';

export interface RouteConfig {
  desc: string;
  showInNav: boolean;
  path: string;
  element: React.ReactNode;
}

const routes: RouteConfig[] = [
  { desc: 'Home', path: '/', element: React.createElement(HomePage), showInNav: true },
];

export default routes;
