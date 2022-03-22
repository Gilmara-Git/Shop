const ADD_TO_CART = 'ADD_TO_CART';

type props = {
    product: object
}

export function addToCart(product: props){
    return { 
        type: ADD_TO_CART, product: product
    }
};

export default addToCart;


// export function addToCart(item: any): any {
//   throw new Error("Function not implemented.");
// }
// // export function addToCart(item: any): any {
// //   throw new Error("Function not implemented.");
// // }
