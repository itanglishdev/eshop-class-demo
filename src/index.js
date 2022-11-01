import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextProvider from './components/Context';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartPage from './components/CartPage'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/cart' element={<CartPage/>} />
          {/* <Route path='/' /> */}
        </Routes>
      </BrowserRouter>
      

    </ContextProvider>
);


