import { ReactNode } from 'react';
import { RouteProps } from 'react-router-dom';

export type RouteType = RouteProps;
export type RoutesType = RouteType[];

export type OptionsType = {
	router: boolean;
	switch: boolean;
};
