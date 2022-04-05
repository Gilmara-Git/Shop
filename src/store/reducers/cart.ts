// import ADD_TO_CART from '../actions/cart';
// import REMOVE_FROM_CART from '../actions/cart';
// import DELETE_PRODUCT_FROM_CART from '../actions/cart';

import CartItem from '../../models/cart';

const initialState= {
    items :{},
    totalAmount: 0
}


const cartReducer = (state= initialState, action: any)=>{       
    
    if(action.type === 'ADD_TO_CART'){ //Using switch was not passing thru this line       
            const addedProduct = action.product;           
            const productPrice = addedProduct.price;
            const productTitle = addedProduct.title; 
            const productURL = addedProduct.imageUrl;
           
        let updatedOrNewCartItem: CartItem;

        if(state.items[addedProduct.id]){
            // update items -  existing one
            updatedOrNewCartItem = new CartItem(
                state.items[addedProduct.id].quantity + 1,
                productPrice,
                productTitle,               
                state.items[addedProduct.id].sum + productPrice,
                productURL,
                );     
        }else {
             updatedOrNewCartItem = new CartItem(1,productPrice, productTitle, productPrice, productURL);
            // adding a new item to Cart dinamically
        }
        
        return { 
            ...state, //copy of our state
            items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
            totalAmount: state.totalAmount  + productPrice
        }
    }
    
    if(action.type === 'REMOVE_QUANTITY_FROM_CART'){
        const prodId = action.product.id;
        const productPrice  =  state.items[prodId].productPrice;
        const prodcutTitle = state.items[prodId].productTitle;
        const productSum = state.items[prodId].sum  - productPrice;
        const prodcutURL = state.items[prodId].productURL;
       
        const updateCart = new CartItem(
            state.items[prodId].quantity -1,
            productPrice,
            prodcutTitle,
            productSum,
            prodcutURL
        )

        if(state.items[prodId].quantity > 1){
            return { 
                ...state, 
                items:{ ...state.items, [prodId]: updateCart
                },
                totalAmount: state.totalAmount - productPrice
                }
            
        }else{
           
            delete state.items[prodId];            
         
            return {
                ...state,
                items: {...state.items},
                totalAmount: state.totalAmount - productPrice
            }
        }
    }
  
    if(action.type === 'DELETE_PRODUCT_FROM_CART'){
        const prodId = action.prodId;
        const prodPrice = state.items[prodId].productPrice;
        const prodQuantity =  state.items[prodId].quantity;
        delete state.items[prodId];         
        const reduceFromTotal = prodPrice * prodQuantity;
       
        return {
            ...state,
            items: { ...state.items},
            totalAmount: state.totalAmount - reduceFromTotal
        }
    }
        
    return state;

}

export default cartReducer;