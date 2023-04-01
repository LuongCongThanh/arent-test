import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Switch, RouteProps, RouterProvider} from 'react-router-dom';
import Home from "@pages/Home";


const routes: RouteProps[] = [
	{
		path: '/',
		exact: true,
		component: Home,
	},
];

const MainLayout = () => {
	return (


			<div>
				<Header />
				<Switch>
					{routes.map((route) => (
						<Route key={route.path} {...route} />
					))}
				</Switch>
				<Footer />
			</div>

	);
};

export default MainLayout;
