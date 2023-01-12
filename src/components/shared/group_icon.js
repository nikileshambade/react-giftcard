import './shared.css';
import React from 'react';
import { AiFillTwitterCircle, AiFillFacebook, AiFillMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsMessenger } from 'react-icons/bs';
import { Col, Row } from 'react-bootstrap';

const Icons = ({ component }) => {
    return(
        <div className='icon-cnt'>
            <div className='icon-outline'>
                {component}
            </div>
        </div>
    )
}

const GroupIcon = (props) => {
    const columns = props.columns || 2;
    return(
        <div>
            <Row>
                <Col>
                    <Icons component={<AiFillFacebook color='#3b5998'/>} />
                </Col>
                <Col>
                    <Icons component={<AiFillTwitterCircle color='#55acee' />} />
                </Col>
                <Col>
                    <Icons component={<AiFillMail color='#dc4e41' />} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Icons component={<AiOutlineWhatsApp color='#43d854'/>} />
                </Col>
                <Col>
                    <Icons component={<BsMessenger color='#006AFF'/>} />
                </Col>
                <Col>
                    <Icons component={<AiFillMail color='#dc4e41' />} />
                </Col>
            </Row>
        </div>
    )
}

export default GroupIcon;