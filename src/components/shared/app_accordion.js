import './shared.scss';
import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import ItalicHeader from './italic_header';

const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey);
  
    return (
      <div onClick={decoratedOnClick}>
        {children}
      </div>
    );
  }

const AppAccordion = (props) => {

    const data = props.data;
    return(
        <Accordion defaultActiveKey="0">
            {data && data.map((item, index) => (
                <Card>
                    <Card.Header>
                        <ItalicHeader title={item.title}></ItalicHeader>
                        <p className='accordion-desc'>{item.discription}</p>
                        <hr/>
                        <CustomToggle eventKey={index}>
                            <small className='toggle-text'><AiOutlineInfoCircle size='20' /> {item.toggleText}</small>
                        </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={index}>
                    <Card.Body>{item.content}</Card.Body>
                    </Accordion.Collapse>
                </Card>
            ))}
        </Accordion>
    )
}

export default AppAccordion;