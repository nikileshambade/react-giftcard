import React from 'react';
import './home.css';
import RightPanel from './right-panel';
import { Row, Col, Image } from 'react-bootstrap';

const Home = () => {
    return(
        <React.Fragment>
            <Row className='logo'>
                <h1>LOGO</h1>
            </Row>
            <Row>
                <Col>
                    <Image className='home-img' src='https://www.mindinventory.com/blog/wp-content/uploads/2018/07/reactjs-gained.jpg' />
                </Col>
                <Col>
                    <RightPanel />
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Home;