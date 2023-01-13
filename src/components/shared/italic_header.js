import './shared.scss';
import React from 'react';

const ItalicHeader = (props) => {
    return(
        <i className='italic-header'>
            {props.title}
        </i>
    )
}

export default ItalicHeader;