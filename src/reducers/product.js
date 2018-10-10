import {
    ADD_PRODUCT,
    LIST_PROUCT
} from './../actions/types'

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state }
        case LIST_PROUCT:
            return { ...state }
        default:
            return state;
    }
}