import ACTION from '../actions';

import { initialState } from '../initalState'

const giftCard = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.LOAD_GIFT:
            return state;
        case ACTION.UPDATE_EMAIL:
            return Object.assign({}, state, { emailId: action.payload});
        case 'load_db_success': 
            return state;
        case ACTION.UPDATE_STYLE: {
            if(!state.activeScreen || !state.activeElement) {
                return state;
            }
            let init_json = state.widget.initial_json;
            let { elements } = init_json[state.activeScreen];
            let element = elements[state.activeElement];
            init_json = {
                ...init_json,
                [state.activeScreen]: {
                    elements: {
                        ...elements,
                        [state.activeElement]: {
                            ...element,
                            style: {
                                ...element.style,
                                ...action.payload
                            }
                        }
                    }
                }
            };
            
            return {
                ...state,
                widget: {
                    ...state.widget,
                    initial_json: {
                        ...init_json
                    }
                }
            };
        }
        case ACTION.UPDATE_SCREEN_DETAILS: {
            return {
                ...state,
                ...action.payload
            };
        }
        case ACTION.LOAD_WIDGET: {
            return {
                ...state,
                widget: {
                    initial_json: action.payload
                }
            };
        }
        default:
            return state;
    }
}

export { giftCard }