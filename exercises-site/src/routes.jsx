import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import reportWebVitals from './tests/reportWebVitals';

import { Header } from './components/shared/HeaderC';
import { NavBar } from './components/shared/NavBar';
import { Footer } from './components/shared/footer';

import Home from './components/pages/Home';
import NotFoundPage from './components/pages/NotFoundPage';

import { ReactExercise } from './components/pages/ReactExercises';
import { ThreejsExercises } from './components/pages/ThreejsExercises';

import { reactRoutes } from './routes/reactjs-routes';
import { threeRoutes } from './routes/threejs-routes';


export function RoutesThree(){
  return (
    <React.StrictMode>
      <BrowserRouter basename="/react-exercises-site">
        <Header />
        <NavBar />
        <Suspense fallback={<div>Carregando componente...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            
            
            {/*----------- React Exercises -----------*/}
            <Route path="/react-exercises" element={<ReactExercise />} />

            {reactRoutes.map((route, i) => (
              <Route key={i} path={route.path} element={route.element} />
            ))}

            {/* ----------- Three.js Exercises -----------*/}
            <Route path="/threeJs" element={<ThreejsExercises />} />
            
            {threeRoutes.map((route, i) => (
              <Route key={i} path={route.path} element={route.element} />
            ))}

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  )
}


reportWebVitals();