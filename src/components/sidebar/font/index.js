import { FontStyle } from "./font-style";
import { FontSize } from "./font-size";
import { FontFmaily, CustomFont } from "./font-family";

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