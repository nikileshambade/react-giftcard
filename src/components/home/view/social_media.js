import React from 'react';
import GroupIcon from '../../shared/group_icon';
import ViewHeader from '../../shared/view_header';
import ViewTitle from '../../shared/view_title';
import InputText from '../../shared/input_text';
import AppAccordion from '../../shared/app_accordion';
import AppButton from '../../shared/app_btn';

const accordionData =[{
    title: 'Get 10% OFF for a referal',
    discription: 'Get 10% off after you spend $40. Your freind gets $10 off after they spend $40',
    toggleText: 'Coupon Details',
    content: <h1>text</h1>
},
{
    title: 'Get 10% OFF for a referal',
    discription: 'Get 10% off after you spend $40. Your freind gets $10 off after they spend $40',
    toggleText: 'Coupon Details',
    content: 'any thing either component or else'
}]

const SocialMediaSharing = () => {
    return(
        <div>
            <ViewHeader title='Refer a friend' />
            <ViewTitle title='How would you like to share ?' />
            <GroupIcon></GroupIcon>
            <InputText placeholder='Email'/>
            <AppAccordion data={accordionData} />
            <AppButton>Start refering</AppButton>
        </div>
    )
}

export default SocialMediaSharing;