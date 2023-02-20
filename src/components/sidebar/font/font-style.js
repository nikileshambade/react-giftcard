import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ACTION from "../../../state/actions";

export const FontStyle = ({ fontStyle, textDecoration, fontWeight }) => {
    const [fontDetails, setFont] = useState({
        fontStyle,
        textDecoration,
        fontWeight
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: ACTION.UPDATE_STYLE,
            payload: fontDetails
        });
    }, [fontDetails, dispatch]);

    const onBoldClick = (event) => {
        if(event.target.classList.contains('font-style-buttons-click')) {
            setFont({
                ...fontDetails,
                fontWeight: 'normal'
            });
            event.target.classList.remove('font-style-buttons-click');
        } else {
            setFont({
                ...fontDetails,
                fontWeight: 'bold'
            });
            event.target.classList.add('font-style-buttons-click');
        }
    };

    const onItalicClick = (event) => {
        if(event.target.classList.contains('font-style-buttons-click')) {
            setFont({
                ...fontDetails,
                fontStyle: 'normal'
            });
            event.target.classList.remove('font-style-buttons-click');
        } else {
            setFont({
                ...fontDetails,
                fontStyle: 'italic'
            });
            event.target.classList.add('font-style-buttons-click');
        }
    };

    const onUnderlineClick = (event) => {
        if(event.target.classList.contains('font-style-buttons-click')) {
            setFont({
                ...fontDetails,
                textDecoration: 'normal'
            });
            event.target.classList.remove('font-style-buttons-click');
        } else {
            setFont({
                ...fontDetails,
                textDecoration: 'underline'
            });
            event.target.classList.add('font-style-buttons-click');
        }
    };

    return (
        <div className='font-styles-wrapper' role='group'>
            <div className="mb-1">Font Styles</div>
            <span className='btn-group'>
                <button id='bold-btn' type='button' onClick={onBoldClick}
                    className={'btn font-style-buttons ' + (fontDetails.fontWeight === 'bold' ? 'font-style-buttons-click' : '')}><b><i>B</i></b></button>
                <button id='italic-btn' type='button' onClick={onItalicClick} 
                    className={'btn font-style-buttons ' + (fontDetails.fontStyle === 'italic' ? 'font-style-buttons-click' : '')}><b><i>I</i></b></button>
                <button id='underline-btn' type='button' onClick={onUnderlineClick} 
                    className={'btn font-style-buttons ' + (fontDetails.textDecoration === 'underline' ? 'font-style-buttons-click' : '')}><b><i>U</i></b></button>
            </span>
            <hr></hr>
        </div>
    );
}