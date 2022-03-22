import ADD_TO_CART from '../actions/cart';
import CartItem from '../../models/cart';

const initialState= {
    items :{},
    totalAmount: 0
}

type product = {
    price: number;
    title: string;
    id: number
}

type props = {
    action: any;
    type:any;   
    product: product;
}

const cartReducer = (state= initialState, action: props)=>{
    switch(action.type){
        case ADD_TO_CART:
            const addedProduct = action.product;
            const productPrice = addedProduct.price;
            const productTitle = addedProduct.title

        let updatedOrNewCartItem: CartItem;

        if(state.items[addedProduct.id]){
            // update items -  existing one
            updatedOrNewCartItem = new CartItem(
                state.items[addedProduct.id].quantity + 1,
                productPrice,
                productTitle,
                state.items[addedProduct.id].sum + productPrice
                );     
        }else {
             updatedOrNewCartItem = new CartItem(1,productPrice, productTitle, productPrice);
            // adding a new item to Cart dinamically
        }
        return { 
            ...state, //copy of our state
            items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
            totalAmount: state.totalAmount  + productPrice
        }
    }
    
    return state;

}

export default cartReducer;