import ADD_ORDER from '../actions/orders';
import Order from '../../models/order';

const initialState = {
    orders : []
};

const OrderReducer = (state = initialState, action: any)=>{
    console.log(action.cartItems, 'cartItems no order reducer')
    console.log(action.totalAmount, 'cartItems no order reducer')
  
    if(action.type === 'ADD_ORDER'){          
        const newOrder = new Order(
            new Date().getMilliseconds().toString(), 
            action.cartItems,
            action.totalAmount,
            new Date()
             );
             
        
            return {
                ...state, 
                orders: state.orders.concat(newOrder)
                
            };
            // concat returns a new array and a new item to it, old array is untouched
            
            };
         
            return state;
}

export default OrderReducer;