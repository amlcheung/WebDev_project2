import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createStore } from 'redux';
import App from './component/App';
import Instructions from './component/Instructions';
import Easy from './component/Easy';
import Medium from './component/Medium';
import Hard from './component/Medium';
import NavBar from './component/Medium';





ReactDOM.render(
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/instructions" element={<Instructions/>}/>
      <Route path="/easy" element={<Easy/>}/>
      <Route path="/medium" element={<Medium/>}/>
      <Route path="/hard" element={<Hard/>}/>
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root'));

