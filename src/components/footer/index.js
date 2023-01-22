import React from 'react';
import './footer.scss';

const footerData = [{
    name: 'footer1',
    redirect: ''
},
{
    name: 'footer2',
    redirect: ''
},
{
    name: 'footer3',
    redirect: ''
}]

const Footer = () => {
    return(
        <footer>
            { footerData.map(item => 
                <a key={item.name} href={item.redirect}>{item.name}</a>
            )}
        </footer>
    )
}

export default Footer;