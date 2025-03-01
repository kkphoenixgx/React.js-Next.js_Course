import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import reportWebVitals from './tests/reportWebVitals';
// import App from './App';
import Home  from './components/pages/Home.js';
import ExerciseOne from './components/react-exercises/exerciseOne/exercise1.jsx';
import { ThreejsExercises } from './components/pages/ThreejsExercises.jsx';

import { Footer } from './components/shared/footer.jsx';
import { Header } from './components/shared/HeaderC.jsx';
import { NavBar } from './components/shared/NavBar.jsx'
import { ReactExercise } from './components/pages/ReactExercises.jsx';
import NotFoundPage from './components/pages/NotFoundPage.jsx';
import StatsPanel from './components/Threejs/statsPanel.js';
import { AxesHelper } from './components/Threejs/AxesHelper.jsx';
import { GridHelper } from './components/Threejs/gridHelper.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter  basename="/react-exercises-site">
      <Header></Header>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        
        <Route exact path="/react-exercises" element={<ReactExercise/>}></Route>
        <Route exact path="/react-exercises/exercise1" element={<ExerciseOne/>}></Route>
        
        <Route exact path="/threeJs" element={<ThreejsExercises/>}></Route>
        <Route exact path="/threeJs/statsPanel" element={<StatsPanel/>}></Route>
        <Route exact path="/threeJs/axesHelper" element={<AxesHelper/>}></Route>
        <Route exact path="/threeJs/gridHelper" element={<GridHelper/>}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();