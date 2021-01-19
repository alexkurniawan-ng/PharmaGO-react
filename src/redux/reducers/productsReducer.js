const INITIAL_STATE = {
    products: []
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            console.log('productsReducer.js GET_PRODUCTS: ', action.payload)
            return {
                ...state,
                products: action.payload
            }
    
        default:
            return state;
    }
}