import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ACTION from "../../../state/actions";

export const FontStyle = (props) => {
    const [fontDetails, setFont] = useState(props);
    const [fontWeight, setFontWeight] = useState(props.fontWeight);
    const [fontStyle, setFontStyle] = useState(props.fontStyle);
    const [textDecoration, setTextDecoration] = useState(props.textDecoration);
    const dispatch = useDispatch();

    useEffect(() => {
        setFontWeight(props.fontWeight);
        setFontStyle(props.fontStyle);
        setTextDecoration(props.textDecoration);
    }, [props]);

    useEffect(() => {
        dispatch({
            type: ACTION.UPDATE_STYLE,
            payload: fontDetails
        });
    }, [fontDetails, dispatch]);

    const onBoldClick = (event) => {
        if(event.target.classList.contains('font-style-buttons-click')) {
            setFont({
                textDecoration,
                fontStyle,
                fontWeight: 'normal'
            });
            event.target.classList.remove('font-style-buttons-click');
        } else {
            setFont({
                textDecoration,
                fontStyle,
                fontWeight: 'bold'
            });
            event.target.classList.add('font-style-buttons-click');
        }
    };

    const onItalicClick = (event) => {
        if(event.target.classList.contains('font-style-buttons-click')) {
            setFont({
                textDecoration,
                fontWeight,
                fontStyle: 'normal'
            });
            event.target.classList.remove('font-style-buttons-click');
        } else {
            setFont({
                textDecoration,
                fontWeight,
                fontStyle: 'italic'
            });
            event.target.classList.add('font-style-buttons-click');
        }
    };

    const onUnderlineClick = (event) => {
        if(event.target.classList.contains('font-style-buttons-click')) {
            setFont({
                fontStyle,
                fontWeight,
                textDecoration: 'normal'
            });
            event.target.classList.remove('font-style-buttons-click');
        } else {
            setFont({
                fontStyle,
                fontWeight,
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
                    className={'btn font-style-buttons ' + (fontWeight === 'bold' ? 'font-style-buttons-click' : '')}><b><i>B</i></b></button>
                <button id='italic-btn' type='button' onClick={onItalicClick} 
                    className={'btn font-style-buttons ' + (fontStyle === 'italic' ? 'font-style-buttons-click' : '')}><b><i>I</i></b></button>
                <button id='underline-btn' type='button' onClick={onUnderlineClick} 
                    className={'btn font-style-buttons ' + (textDecoration === 'underline' ? 'font-style-buttons-click' : '')}><b><i>U</i></b></button>
            </span>
            <hr></hr>
        </div>
    );
}