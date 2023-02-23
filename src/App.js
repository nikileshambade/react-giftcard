import './App.scss';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from './components/home';
import WelcomeScreen from './components/home/view/welcome';
import SocialMediaSharing from './components/home/view/social_media';
import CouponsScreen from './components/home/view/coupons_screen';
import Header from './components/header';
import Footer from './components/footer';
import SideBar from './components/sidebar/index.js';
import ThanksScreen from './components/home/view/thanks';
import DetailsScreen from './components/home/view/details';
import { GQLQuery } from './query/useGQLQuery';
import { LOAD_WIDGET } from './query';
import ACTION from './state/actions';

const App = () => {
  const { data, isLoading, error } = GQLQuery('widget', LOAD_WIDGET);
  const dispatch = useDispatch()
  if(isLoading) return <h4>Loading widgets info......</h4>
  if(data && data.getWidgetInfo) {
    dispatch({
      type: ACTION.LOAD_WIDGET,
      payload: data.getWidgetInfo.initial_json
    })
  }

  return (
      <Container fluid>
        <Router>
          <Header></Header>
          <Row>
            <Col md={9} >
              <Routes>
                <Route path='/' element={<Home />}>
                  <Route path="/" element={<WelcomeScreen />}></Route>
                  <Route path="/social" element={<SocialMediaSharing />}></Route>
                  <Route path="/details" element={<DetailsScreen />}></Route>
                  <Route path="/coupons" element={<CouponsScreen />}></Route>
                  <Route path="/thanks" element={<ThanksScreen />}></Route>
                </Route>
              </Routes>
            </Col>
            <Col md={3}>
              <SideBar></SideBar>
            </Col>
          </Row>
          <Footer></Footer>
        </Router>
      </Container>
  );
}

export default App;
