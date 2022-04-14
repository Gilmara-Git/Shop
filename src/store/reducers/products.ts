import  PRODUCTS   from '../../data/dummy-data';
import { DELETE_PRODUCT }  from '../actions/products';

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod=> prod.ownerId === 'u1')
}

const productsReducer = (state = initialState, action: any)=>{
    switch(action.type){
        case DELETE_PRODUCT:
            const filteredProducts = state.userProducts.filter(prod=> prod.id !== action.pid);
            
            return { 
                ...state,
                userProducts:filteredProducts,
                availableProducts: filteredProducts   
            };
            

    }

    return state;
}

export default productsReducer;