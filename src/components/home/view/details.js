import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../shared/shared.scss';

import ViewHeader from '../../shared/view_header';
import ViewTitle from '../../shared/view_title';
import InputText from '../../shared/input_text';
import AppButton from '../../shared/app_btn';
import ACTION from '../../../state/actions';

const DetailsScreen = (props) => {
    const state = useSelector(state => state.giftCard.widget.initial_json.detailsScreen.elements);
    const [selectedElement, setSelectedElement] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: ACTION.UPDATE_SCREEN_DETAILS,
            payload: {
                activeScreen: 'detailsScreen',
                activeElement: selectedElement
            }
        });
    }, [selectedElement, dispatch]);

    const contentClicked = elementName => setSelectedElement(elementName);

    const buttonData = () => {
        return { buttonData: state.detailsScreenShareButton, buttonTextData: state.detailsScreenShareButtonText };
    }

    return (
        <React.Fragment>
            <ViewHeader title={state.detailsScreenHeading.text} style={state.detailsScreenHeading.style}
                field="detailsScreenHeading" click={() => contentClicked('detailsScreenHeading')} />
            <ViewTitle className='view-secondary-title hover-edit' contentEditable='true'
                onClick={() => contentClicked('detailsScreenSubHeading', 'text')}
                suppressContentEditableWarning="true" title={state.detailsScreenSubHeading.text}
                style={state.detailsScreenSubHeading.style} />
            <InputText id="#detailsScreenInput" placeholder={state.detailsScreenName.text} readOnly />
            <InputText id="#detailsScreenEmail" placeholder={state.detailsScreenEmail.text} readOnly />
            <AppButton data={buttonData()} elemClicked={contentClicked}>{state.detailsScreenShareButtonText.text}</AppButton>
        </React.Fragment>
    )
}

export default DetailsScreen;