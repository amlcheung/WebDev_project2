import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createStore } from 'redux';
import App from './component/App';
import Instructions from './component/Instructions';
import Easy from './component/Easy';
import Medium from './component/Medium';
import Hard from './component/Hard';
import NavBar from './component/NavBar';
import { colorReducer } from './reducer/colorReducer';
import { WordGeneratorReducer } from './reducer/WordGeneratorReducer';


// const storeColor = createStore(colorReducer);
const store = createStore(WordGeneratorReducer);
// const storeMediumWord = createStore(WordGeneratorReducer);
// const storeHardWord = createStore(WordGeneratorReducer);

ReactDOM.render(
  <BrowserRouter>
    <NavBar/>
    <Provider store={store}>
      <Routes>
          <Route path="/" element={
              <App/>
          }></Route>
          <Route path="/easy" element={
              <Easy/>
          }></Route>
          <Route path="/medium" element={
              <Medium />
          }></Route>
          <Route path="/hard" element={
            <Hard />
          }></Route>
          <Route path="/instructions" element={
            <Instructions />
          }></Route>
        </Routes>
    </Provider>
  </BrowserRouter>

  
  
  ,document.getElementById('root'));

