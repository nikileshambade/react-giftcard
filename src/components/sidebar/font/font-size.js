import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ACTION from "../../../state/actions";

export const FontSize = ({ fontSize }) => {
    const fntSize = fontSize ? fontSize.match(/(\d+)/)[0] : 14;
    const [size, setSize] = useState(fntSize);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: ACTION.UPDATE_STYLE,
            payload: {
                fontSize: size + 'px'
            }
        });
    }, [size, dispatch]);

    const onFontSizeChange = (event) => setSize(event.target.value.replace(/[^0-9]/g, ''))

    return(
        <div className="font-size-wrapper w-100">
            <div className="mb-1">Font Size</div>
            <input type='number' value={fntSize} className="w-75 common-text-style" onChange={onFontSizeChange} />
            <hr></hr>
        </div>
    )
}