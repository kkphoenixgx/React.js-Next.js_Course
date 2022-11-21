import React from 'react';GOST
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import reportWebVitals from './tests/reportWebVitals';
// import App from './App';
import Home  from './components/Home.js';
import ExerciseOne from './components/exercise1';
import PageOne from './components/Threejs/page1';

import { Footer } from './components/footer';
import { Header } from './components/HeaderC';
import { NavBar } from './components/NavBar.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header></Header>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/exercise1" element={<ExerciseOne/>}></Route>
        <Route exact path="/threeJs/pageOne" element={<PageOne/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();