import ACTION from '../actions';

const giftCard = (state = [], action) => {
    switch (action.payload) {
        case ACTION.LOAD_GIFT:
            return state;
        default:
            return state;
    }
}

export { giftCard }