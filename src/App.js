import './App.scss';
import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import Home from './components/home';
import WelcomeScreen from './components/home/view/welcome';
import SocialMediaSharing from './components/home/view/social_media';
import CouponsScreen from './components/home/view/coupons_screen';
import rootReducer from './state/reducer';

const store = configureStore({ reducer: rootReducer });

const App = () => {
  return (
    <Provider store={store}>
      <Container fluid>
        <Router>
          <Routes>  
            <Route path='/' element={<Home />}>
              <Route path="/" element={<WelcomeScreen />}></Route>
              <Route path="/social" element={<SocialMediaSharing />}></Route>
              <Route path="/coupons" element={<CouponsScreen />}></Route>
            </Route>
          </Routes>
        </Router>
      </Container>
    </Provider>
  );
}

export default App;
