import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TopPage from "@pages/TopPage";
import RecordPage from "@pages/RecordPage";
import ColumPage from "@pages/ColumPage";
import {ReactComponent as IconScrollToTop} from '@assets/icons/icon_scroll_to_top.svg';

const routes = [
    {
        path: '/',
        exact: true,
        element: <TopPage/>,
    },
    {
        path: '/record',
        exact: true,
        element: <RecordPage/>,
    },
    {
        path: '/column',
        exact: true,
        element: <ColumPage/>,
    },
];


const MainLayout = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            if (scrollPosition > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="main-layout">
            <BrowserRouter>
                <Header/>
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} {...route} />
                    ))}
                </Routes>
                <span className="scroll-icon color-secondary txt-right"
                      onClick={handleClick}>
                        <IconScrollToTop/>
                    </span>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default MainLayout;
