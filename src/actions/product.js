import {
    ADD_PRODUCT,
    LIST_PROUCT
} from './types'

export const addProduct = product => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export const listarTreinosFetch = () => {
    return (dispatch) => {
        dispatch({ type: LIST_PROUCT, payload: '' })
    }
}