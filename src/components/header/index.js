import React from 'react';
import { Nav } from 'react-bootstrap';
import SideBar from '../sidebar';

const headerData = [{
    name: 'Welcome',
    redirect: '/'
},{
    name: 'Details',
    redirect: '/coupons'
},{
    name: 'Share',
    redirect: '/social'
},{
    name: 'Thanks',
    redirect: '/'
}]

const Header = () => {
    return(
        <header>
            <SideBar name='Editor' placement='end'></SideBar>
            <Nav activeKey='/'>
                {headerData.map(item => 
                    <Nav.Item key={item.name}>
                        <Nav.Link href={item.redirect}>{item.name}</Nav.Link>
                    </Nav.Item>
                )}
            </Nav>
        </header>
    )
}

export default Header;