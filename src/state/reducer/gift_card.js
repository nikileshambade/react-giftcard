import ACTION from '../actions';

const intialState = {
    emailId: ''
}

const giftCard = (state = intialState, action) => {
    switch (action.type) {
        case ACTION.LOAD_GIFT:
            return state;
        case ACTION.UPDATE_EMAIL:
            return Object.assign({}, state, { emailId: action.payload});
        default:
            return state;
    }
}

export { giftCard }