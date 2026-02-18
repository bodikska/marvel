import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
// import {ComicsPage, MainPage, Page404, SingleComic} from '../pages/index'

import Spinner from "../spinner/spinner.js";
import {lazy, Suspense} from 'react';
const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComic = lazy(() => import('../pages/SingleComicPage'));
const SingleCharacterLayout = lazy(() => import('../pages/SingleCharacterLayout/SingleCharacterLayout.js'));
const SinglePage = lazy(() => import('../pages/SinglePage'));






const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <main>
                <Suspense fallback={<Spinner/>}>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/comics" element={<ComicsPage />} />
                        <Route 
                            path="/comics/:id" 
                            element={<SinglePage Component={SingleComic} dataType='comic' />} 
                        />
                        <Route 
                            path="/characters/:id" 
                            element={<SinglePage Component={SingleCharacterLayout} dataType='character' />} 
                        />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    )
}


export default App;