import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from 'react-select';
import ACTION from "../../../state/actions";
import { UploadFontModal } from "../../shared/font-upload-modal";
import { FontStyle } from "./font-style";
import { FontSize } from "./font-size";
import { FontFmaily, CustomFont } from "./font-family";

// const FontStyle = ({ fontStyle, textDecoration, fontWeight }) => {
//     const [fontDetails, setFont] = useState({
//         fontStyle,
//         textDecoration,
//         fontWeight
//     });

//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch({
//             type: ACTION.UPDATE_STYLE,
//             payload: fontDetails
//         });
//     }, [fontDetails, dispatch]);

//     const onBoldClick = (event) => {
//         if(event.target.classList.contains('font-style-buttons-click')) {
//             setFont({
//                 ...fontDetails,
//                 fontWeight: 'normal'
//             });
//             event.target.classList.remove('font-style-buttons-click');
//         } else {
//             setFont({
//                 ...fontDetails,
//                 fontWeight: 'bold'
//             });
//             event.target.classList.add('font-style-buttons-click');
//         }
//     };

//     const onItalicClick = (event) => {
//         if(event.target.classList.contains('font-style-buttons-click')) {
//             setFont({
//                 ...fontDetails,
//                 fontStyle: 'normal'
//             });
//             event.target.classList.remove('font-style-buttons-click');
//         } else {
//             setFont({
//                 ...fontDetails,
//                 fontStyle: 'italic'
//             });
//             event.target.classList.add('font-style-buttons-click');
//         }
//     };

//     const onUnderlineClick = (event) => {
//         if(event.target.classList.contains('font-style-buttons-click')) {
//             setFont({
//                 ...fontDetails,
//                 textDecoration: 'normal'
//             });
//             event.target.classList.remove('font-style-buttons-click');
//         } else {
//             setFont({
//                 ...fontDetails,
//                 textDecoration: 'underline'
//             });
//             event.target.classList.add('font-style-buttons-click');
//         }
//     };

//     return (
//         <div className='font-styles-wrapper' role='group'>
//             <div className="mb-1">Font Styles</div>
//             <span className='btn-group'>
//                 <button id='bold-btn' type='button' onClick={onBoldClick}
//                     className={'btn font-style-buttons ' + (fontDetails.fontWeight === 'bold' ? 'font-style-buttons-click' : '')}><b><i>B</i></b></button>
//                 <button id='italic-btn' type='button' onClick={onItalicClick} 
//                     className={'btn font-style-buttons ' + (fontDetails.fontStyle === 'italic' ? 'font-style-buttons-click' : '')}><b><i>I</i></b></button>
//                 <button id='underline-btn' type='button' onClick={onUnderlineClick} 
//                     className={'btn font-style-buttons ' + (fontDetails.textDecoration === 'underline' ? 'font-style-buttons-click' : '')}><b><i>U</i></b></button>
//             </span>
//             <hr></hr>
//         </div>
//     );
// }

// const FontSize = ({ fontSize }) => {
//     const fntSize = fontSize ? fontSize.match(/(\d+)/)[0] : 14;
//     const [size, setSize] = useState(fntSize);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch({
//             type: ACTION.UPDATE_STYLE,
//             payload: {
//                 fontSize: size + 'px'
//             }
//         });
//     }, [size, dispatch]);

//     const onFontSizeChange = (event) => setSize(event.target.value.replace(/[^0-9]/g, ''))

//     return(
//         <div className="font-size-wrapper w-100">
//             <div className="mb-1">Font Size</div>
//             <input type='number' value={size} className="w-75 common-text-style" onChange={onFontSizeChange} />
//             <hr></hr>
//         </div>
//     )
// }

// const FontFmaily = ({ fontFamily }) => {
//     const [family, setFamily] = useState(fontFamily);
//     const dispatch = useDispatch();
//     const options = [
//         { value: 'robot', label: 'Robot' },
//         { value: 'sans-serif', label: 'Sans serif' },
//         { value: 'monospace', label: 'Monospace' }
//     ];

//     useEffect(() => {
//         dispatch({
//             type: ACTION.UPDATE_STYLE,
//             payload: {
//                 fontFamily: family
//             }
//         });
//     }, [family, dispatch]);

//     const onFontFamilySelect = (option) => {
//         setFamily(option.value);
//     }

//     return(
//         <div className="fonts-list-wrapper row">
//             <div className="col">Fonts</div>
//             <Select onChange={onFontFamilySelect} className="w-100" options={options} />
//             <br/>
//             <hr></hr>
//         </div>
//     )
// }

// const CustomFont = ({ fontFamily }) => {
//     const [isFontModalHidden, setFontModal] = useState(true);
//     const [family, setFamily] = useState(fontFamily);
//     const dispatch = useDispatch();
//     const options = [
//         { value: 'robot', label: 'Custom Robot' },
//         { value: 'sans-serif', label: 'Custom Sans serif' },
//         { value: 'monospace', label: 'Custom Monospace' }
//     ];

//     const onFontFamilySelect = (option) => {
//         setFamily(option.value);
//     }

//     useEffect(() => {
//         dispatch({
//             type: ACTION.UPDATE_STYLE,
//             payload: {
//                 fontFamily: family
//             }
//         });
//     }, [family, dispatch]);

//     const onHandleCloseEvent = () => setFontModal(true);
//     const handleCustomFontClick = () => setFontModal(false);
//     const onHandleSaveEvent = () => alert('saved');

//     return(
//         <div className="custom-fonts">
//             <div className="custom-fonts-list-wrapper">
//                 <span className="col">Custom Fonts</span>
//                 <Select className='w-100' onChange={onFontFamilySelect} options={options} />
//             </div>
//             <br/>
//             <button className="btn upload-font-btn btn-secondary" onClick={handleCustomFontClick}>Upload Custom Font</button>
//             <UploadFontModal isHidden={isFontModalHidden}
//                 onHandleClose={onHandleCloseEvent}
//                 onHandleSave={onHandleSaveEvent}></UploadFontModal>
//             <hr></hr>
//         </div>
//     )
// }

const FontWidget = (props) => {
    return(
        <>
            <FontStyle {...props}></FontStyle>
            <FontSize {...props}></FontSize>
            <FontFmaily {...props}></FontFmaily>
            <CustomFont {...props}></CustomFont>
        </>
    )
};

export default FontWidget;