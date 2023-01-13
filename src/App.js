import './App.scss';
import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import WelcomeScreen from './components/home/view/welcome';
import SocialMediaSharing from './components/home/view/social_media';
import CouponsScreen from './components/home/view/coupons_screen';

const App = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;
