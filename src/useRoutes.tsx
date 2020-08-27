import React, { ReactNode } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { RoutesType, OptionsType, RouteType } from './types';

const useRoutes = (routes: RoutesType, options: OptionsType = { router: true, switch: false }): ReactNode => {
	let routesResult: ReactNode = routes.map((route: RouteType) => <Route {...route} />);
	if (options.switch) {
		routesResult = <Switch>{routesResult}</Switch>;
	}
	if (options.router) {
		routesResult = <Router>{routesResult}</Router>;
	}
	return routesResult;
};

export default useRoutes;
