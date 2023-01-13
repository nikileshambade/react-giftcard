import './shared.scss';
import React from 'react';

const AppButton = (props) => {
    return(
        <button className='app-btn' {...props} >
            {props.children}
        </button>
    )
}

export default AppButton;