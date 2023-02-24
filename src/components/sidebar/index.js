import React from "react";
import './sidebar.scss';
import { useDispatch, useSelector } from "react-redux";
import FontWidget from "./font";
import { ColorWidget } from "./colors";
import { updateWidget } from "../../state/actions";

const SideBar = () => {

    const state = useSelector(state => state.giftCard);
    const activeScreen = state.activeScreen;
    const dispatch = useDispatch();

    if(!activeScreen) return <h4>Loading styles....</h4>
    const activeElement = state.activeElement;
    if(!activeElement) return <h4>Please select any element</h4>

    const elementProps = state.widget.initial_json[activeScreen].elements[activeElement];
    
    const HandlePublish = () => {
        dispatch(updateWidget());
    }

    return(
        <>
            <div className="row">
                <div className="main h-100">
                    <div id="mySidenav" className="sidenav">
                        <div className='publish-widget-button' name="publish">
                            <button type='button'
                                onClick={HandlePublish}>Publish widget</button>
                        </div>
                        <hr></hr>
                        {elementProps.text &&
                            <FontWidget {...elementProps.style} />
                        }
                        <ColorWidget {...elementProps.style} />
                    </div>
                </div>
            </div>
        </>
    )
};
export default SideBar