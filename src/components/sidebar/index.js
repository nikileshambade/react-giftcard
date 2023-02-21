import React from "react";
import './sidebar.scss';
import { useSelector } from "react-redux";
import FontWidget from "./font";
import { ColorWidget } from "./colors";

const SideBar = (props) => {
    const state = useSelector(state => state.giftCard);
    const activeScreen = state.activeScreen;

    if(!activeScreen) return <h4>Loading styles....</h4>
    const activeElement = state.activeElement;
    if(!activeElement) return <h4>Please select any element</h4>

    const elementProps = state.widget.initial_json[activeScreen].elements[activeElement];

    return(
        <>
            <div className="row">
                <div className="main h-100">
                    <div id="mySidenav" className="sidenav">
                        <div className='publish-widget-button' name="publish">
                            <button type='button'
                                onClick={() => { }}>Publish widget</button>
                        </div>
                        <hr></hr>
                        <FontWidget {...elementProps} />
                        <ColorWidget {...elementProps} />
                    </div>
                </div>
            </div>
        </>
    )
};
export default SideBar