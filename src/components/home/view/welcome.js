import React from 'react';
import ViewHeader from '../../shared/view_header';
import ViewTitle from '../../shared/view_title';
import InputText from '../../shared/input_text';
import AppButton from '../../shared/app_btn';

const WelcomeScreen = () => {
    return(
        <React.Fragment>
            <ViewHeader title='Refer a friend' />
            <ViewTitle className='view-secondary-title' title='We are launching [XX Product xx] on [xx Date xx].' />
            <p>Please provide your email below and we'll email you to give you access to a promotion t share with your friends when it's available</p>
            <InputText placeholder='Your email address'/>
            <AppButton>Submit</AppButton>
        </React.Fragment>
    )
}

export default WelcomeScreen;