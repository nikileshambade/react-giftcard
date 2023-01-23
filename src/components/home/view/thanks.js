import React from 'react';
import { useSelector } from 'react-redux';

const ThanksScreen = () => {
    const emailId = useSelector(state => state.giftCard.emailId);

    return(
        <React.Fragment>
            <h4>Just to check if we can access entered emaild id from store.</h4>
            <p>Email id : {emailId}</p>
        </React.Fragment>
    )
}

export default ThanksScreen;