import React from 'react';
import ViewHeader from '../../shared/view_header';
import ViewTitle from '../../shared/view_title';
import AppButton from '../../shared/app_btn';
import AppAccordion from '../../shared/app_accordion';

const accordionContent = [{
    title: 'You get...',
    discription: '[$x.xx] [off / per digital gift card] when someone you refer [buy x] [spends $X.xx] [on their first order]'
},
{
    title: 'You get...',
    discription: '[$x.xx] [off / per digital gift card] when someone you refer [buy x] [spends $X.xx] [on their first order]'
}];

const ContentFormat = (content) => (
    content.map(item => (
        <div className='content'>
            <strong>{item.title}</strong>
            <p>{item.discription}</p>
        </div>
    ))
);

const accordionData =[{
    title: 'Get 10% OFF for a referal',
    discription: 'Get 10% off after you spend $40. Your freind gets $10 off after they spend $40',
    toggleText: 'Coupon Details',
    content: ContentFormat(accordionContent)
},
{
    title: 'Get 10% OFF for a referal',
    discription: 'Get 10% off after you spend $40. Your freind gets $10 off after they spend $40',
    toggleText: 'Coupon Details',
    content: ContentFormat(accordionContent)
},
{
    title: 'Get 10% OFF for a referal',
    discription: 'Get 10% off after you spend $40. Your freind gets $10 off after they spend $40',
    toggleText: 'Coupon Details',
    content: ContentFormat(accordionContent)
}]

const CouponsScreen = () => {
    return(
        <React.Fragment>
            <ViewHeader title='Refer a friend' />
            <ViewTitle className='view-title' title="Look what we've got for you..." />
            <AppAccordion data={accordionData} />
            <p>Don't like this offer? Click below for more coupons.</p>
            <AppButton>Start referring</AppButton>
        </React.Fragment>
    )
}

export default CouponsScreen;