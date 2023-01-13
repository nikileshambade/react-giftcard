import React from 'react';
import GroupIcon from '../../shared/group_icon';
import ViewHeader from '../../shared/view_header';
import ViewTitle from '../../shared/view_title';
import AppButton from '../../shared/app_btn';

const iconsToRender = [
    'facebook',
    'whatsapp',
    'gmail',
    'messenger',
    'twitter',
    'twitter'
];

const SocialMediaSharing = () => {
    return(
        <React.Fragment>
            <ViewHeader title='Refer a friend' />
            <ViewTitle className='view-title' title='How would you like to share ?' />
            <GroupIcon iconData={iconsToRender} rows={3} columns={2}></GroupIcon>
            <AppButton>Start refering</AppButton>
        </React.Fragment>
    )
}

export default SocialMediaSharing;