import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRoutes } from '../src/';

const App = () => {
	const routes = useRoutes([
		{ children: 'blah blah', path: '/', exact: true },
		{ children: 'blah bllah /about', path: '/about', exact: true }
	]);
	return <div>{routes}</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
