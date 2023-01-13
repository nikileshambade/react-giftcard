import './App.scss';
import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import SocialMediaSharing from './components/home/view/social_media';

const Comp1 = () => {
  return(
      <h1>
          Comp1 
      </h1>
  )
}

const Comp2 = () => {
  return(
      <h1>
          Comp2
      </h1>
  )
}

const App = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <Router>
          <Routes>  
            <Route path='/' element={<Home />}>
              <Route path="/" element={<Comp1 />}></Route>
              <Route path="/social" element={<SocialMediaSharing />}></Route>
              <Route path='/comp2' element={<Comp2 />}></Route>
            </Route>
          </Routes>
        </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
