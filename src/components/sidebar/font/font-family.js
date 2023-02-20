import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Select from 'react-select';

import ACTION from "../../../state/actions";
import { UploadFontModal } from "../../shared/font-upload-modal";

const FontFmaily = ({ fontFamily }) => {
    const [family, setFamily] = useState(fontFamily);
    const dispatch = useDispatch();
    const options = [
        { value: 'robot', label: 'Robot' },
        { value: 'sans-serif', label: 'Sans serif' },
        { value: 'monospace', label: 'Monospace' }
    ];

    useEffect(() => {
        dispatch({
            type: ACTION.UPDATE_STYLE,
            payload: {
                fontFamily: family
            }
        });
    }, [family, dispatch]);

    const onFontFamilySelect = (option) => {
        setFamily(option.value);
    }

    return(
        <div className="fonts-list-wrapper row">
            <div className="col">Fonts</div>
            <Select onChange={onFontFamilySelect} className="w-100" options={options} />
            <br/>
            <hr></hr>
        </div>
    )
}

const CustomFont = ({ fontFamily }) => {
    const [isFontModalHidden, setFontModal] = useState(true);
    const [family, setFamily] = useState(fontFamily);
    const dispatch = useDispatch();
    const options = [
        { value: 'robot', label: 'Custom Robot' },
        { value: 'sans-serif', label: 'Custom Sans serif' },
        { value: 'monospace', label: 'Custom Monospace' }
    ];

    const onFontFamilySelect = (option) => {
        setFamily(option.value);
    }

    useEffect(() => {
        dispatch({
            type: ACTION.UPDATE_STYLE,
            payload: {
                fontFamily: family
            }
        });
    }, [family, dispatch]);

    const onHandleCloseEvent = () => setFontModal(true);
    const handleCustomFontClick = () => setFontModal(false);
    const onHandleSaveEvent = () => alert('saved');

    return(
        <div className="custom-fonts">
            <div className="custom-fonts-list-wrapper">
                <span className="col">Custom Fonts</span>
                <Select className='w-100' onChange={onFontFamilySelect} options={options} />
            </div>
            <br/>
            <button className="btn upload-font-btn btn-secondary" onClick={handleCustomFontClick}>Upload Custom Font</button>
            <UploadFontModal isHidden={isFontModalHidden}
                onHandleClose={onHandleCloseEvent}
                onHandleSave={onHandleSaveEvent}></UploadFontModal>
            <hr></hr>
        </div>
    )
}

export {
    FontFmaily,
    CustomFont
}