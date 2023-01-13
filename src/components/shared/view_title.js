import './shared.scss';
import React from 'react';

const ViewTitle = (props) => {
    return(
        <p id='view-title'>
            { props.title || 'Header title' }
        </p>
    )
}

export default ViewTitle;