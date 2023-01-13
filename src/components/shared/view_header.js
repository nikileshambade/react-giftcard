import './shared.scss';
import React from 'react';

const ViewHeader = (props) => {
    return(
        <p id='view-header'>
            { props.title || 'Header' }
        </p>
    )
}

export default ViewHeader;