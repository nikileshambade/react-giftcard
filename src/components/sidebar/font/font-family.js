import { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import Select from 'react-select';

import ACTION from "../../../state/actions";
import { UploadFontModal } from "../../shared/font-upload-modal";

const options = [
    { value: 'robot', label: 'Robot' },
    { value: 'sans-serif', label: 'Sans-serif' },
    { value: 'monospace', label: 'Monospace' },
    { value: 'Yesava One', label: 'Yesava One' }
];

const FontFmaily = (props) => {
    const { fontFamily } = props;
    const dispatch = useDispatch();
    const [family, setFamily] = useState();
    
    const selectedLabel = (fontFamily) => options.filter(opt => opt.label === fontFamily);
    const computeSelection = useMemo(() => selectedLabel(fontFamily), [fontFamily]);

    useEffect(() => {
        setFamily(computeSelection ? computeSelection[0]: null)
    }, [props, computeSelection])

    const onFontFamilySelect = (option) => {
        dispatch({
            type: ACTION.UPDATE_STYLE,
            payload: {
                fontFamily: option.label
            }
        });
    }

    return(
        <div className="fonts-list-wrapper row">
            <div className="col">Fonts</div>
            <Select value={family} onChange={onFontFamilySelect} className="w-100" options={options} />
            <br/>
            <hr></hr>
        </div>
    )
}

const CustomFont = (props) => {
    const { fontFamily } = props;
    const [isFontModalHidden, setFontModal] = useState(true);
    const [family, setFamily] = useState();
    const dispatch = useDispatch();
    const selectedLabel = (fontFamily) => options.filter(opt => opt.label === fontFamily);
    const computeSelection = useMemo(() => selectedLabel(fontFamily), [fontFamily]);

    useEffect(() => {
        setFamily(computeSelection ? computeSelection[0]: null)
    }, [props, computeSelection])

    const onFontFamilySelect = (option) => {
        dispatch({
            type: ACTION.UPDATE_STYLE,
            payload: {
                fontFamily: option.label
            }
        });
    }

    const onHandleCloseEvent = () => setFontModal(true);
    const handleCustomFontClick = () => setFontModal(false);
    const onHandleSaveEvent = () => alert('saved');

    return(
        <div className="custom-fonts">
            <div className="custom-fonts-list-wrapper">
                <span className="col">Custom Fonts</span>
                <Select value={family} className='w-100' onChange={onFontFamilySelect} options={options} />
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