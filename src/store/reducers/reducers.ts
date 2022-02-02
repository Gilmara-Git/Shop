import  PRODUCTS   from '../../data/dummy-data';

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS
}

const productsReducer = (state = initialState, action)=>{
    return state;
}

export default productsReducer;