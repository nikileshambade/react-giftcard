import './shared.scss';
import React from 'react';

const ViewTitle = (props) => {
    return(
        <p {...props}>
            { props.title || 'Header title' }
        </p>
    )
}

export default ViewTitle;