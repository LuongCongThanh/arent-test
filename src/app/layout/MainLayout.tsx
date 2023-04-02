import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "@pages/Home";


const routes = [
	{
		path: '/',
		exact: true,
		element: <Home/>,
	},
];

const MainLayout = () => {
	return (
			<div className="main-layout">
				<BrowserRouter>
					<Header />
					<Routes>
						{routes.map((route) => (
							<Route key={route.path} {...route} />
						))}
						</Routes>
					<Footer />
				</BrowserRouter>
			</div>
	);
};

export default MainLayout;
