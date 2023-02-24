import React, { useEffect, useState } from 'react';
import ViewHeader from '../../shared/view_header';
import ViewTitle from '../../shared/view_title';
import AppButton from '../../shared/app_btn';
import AppAccordion from '../../shared/app_accordion';
import { useDispatch, useSelector } from 'react-redux';
import ACTION from '../../../state/actions';

const accordionContent = [{
    title: 'You get...',
    discription: '[$x.xx] [off / per digital gift card] when someone you refer [buy x] [spends $X.xx] [on their first order]'
},
{
    title: 'You get...',
    discription: '[$x.xx] [off / per digital gift card] when someone you refer [buy x] [spends $X.xx] [on their first order]'
}];

const ContentFormat = (content) => (
    content.map((item, index) => (
        <div key={index} className='content'>
            <strong>{item.title}</strong>
            <p>{item.discription}</p>
        </div>
    ))
);

const accordionData = [{
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
}];

const CouponsScreen = () => {
    const state = useSelector(state => state.giftCard.widget.initial_json.couponsScreen.elements);
    const [selectedElement, setSelectedElement] = useState('couponsScreenHeading');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: ACTION.UPDATE_SCREEN_DETAILS,
            payload: {
                activeScreen: 'couponsScreen',
                activeElement: selectedElement
            }
        });
    }, [selectedElement, dispatch]);

    const buttonData = () => ({ buttonData: state.couponsScreenShareButton, buttonTextData: state.couponsScreenShareButtonText });
    const contentClicked = elementName => setSelectedElement(elementName);

    return (
        <React.Fragment>
            <ViewHeader title={state.couponsScreenHeading.text} field="couponsScreenHeading"
                style={state.couponsScreenHeading.style} click={() => contentClicked('couponsScreenHeading')} />
            <ViewTitle className='view-title hover-edit' contentEditable='true' suppressContentEditableWarning="true"
                title={state.couponsScreenSubHeading.text} style={state.couponsScreenSubHeading.style}
                onClick={() => contentClicked('couponsScreenSubHeading')} />
            <AppAccordion data={accordionData} />
            <p className='hover-edit' style={state.couponsScreenOfferDetails.style}
                onClick={() => contentClicked('couponsScreenOfferDetails')}
                contentEditable='true' suppressContentEditableWarning="true">{state.couponsScreenOfferDetails.text}
            </p>
            <AppButton data={buttonData()} elemClicked={() => contentClicked('couponsScreenShareButtonText')}>{state.couponsScreenShareButtonText.text}</AppButton>
        </React.Fragment>
    )
}

export default CouponsScreen;