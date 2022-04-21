import  PRODUCTS   from '../../data/dummy-data';
import { DELETE_PRODUCT }  from '../actions/products';
import { UPDATE_PRODUCT } from '../actions/products';
import { CREATE_PRODUCT } from '../actions/products';
import Product from '../../models/product';

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod=> prod.ownerId === 'u1')
}

const productsReducer = (state = initialState, action: any)=>{

    switch(action.type){
        case CREATE_PRODUCT:
            const newProduct = new Product(
                new Date().getMilliseconds().toString(), 
                'u1',
                action.productData.title,
                action.productData.imageUrl,
                action.productData.description,
                Number(action.productData.price).toFixed(2)
                );

                return {
                    ...state,
                    userProducts: state.userProducts.concat(newProduct),
                    availableProducts: state.availableProducts.concat(newProduct)
                };

        case UPDATE_PRODUCT:
            const indexProd = state.userProducts.findIndex(prod=>prod.id === action.pid);
            const upatedProduct =  new Product(
                action.pid,
                state.userProducts[indexProd].ownerId,
                action.productData.title,
                action.productData.imageUrl,
                action.productData.description,
                state.userProducts[indexProd].price
                );
                
                let updatedUserProducts = [... state.userProducts ];
                updatedUserProducts[indexProd] = upatedProduct;  
                
            const indexAvalProd = state.availableProducts.findIndex(prod=>prod.id === action.pid);
            let updatedAvalProducts = [ ...state.availableProducts ];
            updatedAvalProducts[indexAvalProd] = upatedProduct;

            return {
                ...state,
                userProducts: updatedUserProducts,
                availableProducts: updatedAvalProducts
            }
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