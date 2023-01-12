import React from 'react';
import { Outlet } from 'react-router-dom';

const RightPanel = () => {
    return(
        <React.Fragment>
            <div className='right-panel'>
                <Outlet></Outlet>
            </div>
        </React.Fragment>
    )
}

export default RightPanel;