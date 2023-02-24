import React, { useEffect, useState } from 'react';
import GroupIcon from '../../shared/group_icon';
import ViewHeader from '../../shared/view_header';
import ViewTitle from '../../shared/view_title';
import AppButton from '../../shared/app_btn';
import { useDispatch, useSelector } from 'react-redux';
import ACTION from '../../../state/actions';

const iconsToRender = [
    'facebook',
    'whatsapp',
    'gmail',
    'messenger',
    'twitter'
];

const SocialMediaSharing = (props) => {
    const state = useSelector(state => state.giftCard.widget.initial_json.socialMediaScreen.elements);
    const [selectedElement, setSelectedElement] = useState('socialMediaScreenHeading');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: ACTION.UPDATE_SCREEN_DETAILS,
            payload: {
                activeScreen: 'socialMediaScreen',
                activeElement: selectedElement
            }
        });
    }, [selectedElement, dispatch]);

    const buttonData = () => {
        return { buttonData: state.socialMediaShareButton, buttonTextData: state.socialMediaShareButtonText };
    }
    
    const contentClicked = elementName => setSelectedElement(elementName);

    return (
        <React.Fragment>
            <ViewHeader title={state.socialMediaScreenHeading.text}
                style={state.socialMediaScreenHeading.style} click={() => contentClicked('socialMediaScreenHeading')} />
            <ViewTitle contentEditable='true' suppressContentEditableWarning="true" className='view-title hover-edit'
                title={state.socialMediaScreenSubHeading.text}
                style={state.socialMediaScreenSubHeading.style}
                onClick={() => contentClicked('socialMediaScreenSubHeading')} />
            <GroupIcon iconData={iconsToRender} rows={3} columns={2} iconClicked={() => contentClicked('socialMediaShareButton')}></GroupIcon>
            <AppButton data={buttonData()} elemClicked={() => contentClicked('socialMediaShareButtonText')}>{state.socialMediaShareButtonText.text}</AppButton>
        </React.Fragment>
    )
}

export default SocialMediaSharing;