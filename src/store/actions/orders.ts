export const ADD_ORDER = "ADD_ORDER"; // Important. It needs to be export, so the correct action type is read by Redux

type Orders = {
  cartItems: object;
  totalAmount: number;
};

export function addOrder({ cartItems, totalAmount }: Orders) {
  return {
    type: ADD_ORDER,
    cartItems,
    totalAmount,
  };
}
export default addOrder;
