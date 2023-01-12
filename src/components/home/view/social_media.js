import React from 'react';
import GroupIcon from '../../shared/group_icon';
import ViewHeader from '../../shared/view_header';
import ViewTitle from '../../shared/view_title';

const SocialMediaSharing = () => {
    return(
        <div>
            <ViewHeader title='Refer a friend' />
            <ViewTitle title='How would you like to share ?' />
            <GroupIcon></GroupIcon>
        </div>
    )
}

export default SocialMediaSharing;