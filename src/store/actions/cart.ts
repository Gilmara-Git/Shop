export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_QUANTITY_FROM_CART = 'REMOVE_QUANTITY_FROM_CART';
export const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';

type Iproduct = {
    product: object;
}
// type IProdId = {
//     prodId : string;
// }

export function addToCart(product: Iproduct){
   
    return { type: ADD_TO_CART, product: product }
};

export function removeQuantityFromCart(product: Iproduct){
    return { type: REMOVE_QUANTITY_FROM_CART, product: product}
}

export function deleteProductFromCart(product: Iproduct){
    return { type: DELETE_PRODUCT_FROM_CART, prodId: product  }
}

// export default addToCart;


// export function addToCart(item: any): any {
//   throw new Error("Function not implemented.");
// }
// // export function addToCart(item: any): any {
// //   throw new Error("Function not implemented.");
// // }
