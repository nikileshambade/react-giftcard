import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiFillEdit } from 'react-icons/ai';

import './sidebar.scss';

const SideBar = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <AiFillEdit className='edit-icon' onClick={handleShow}></AiFillEdit>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h1>You can add your side bar content here</h1>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
}


export default SideBar;