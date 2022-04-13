import { ADD_TO_CART } from "../actions/cart";
import { REMOVE_QUANTITY_FROM_CART } from "../actions/cart";
import { DELETE_PRODUCT_FROM_CART } from "../actions/cart";
import { ADD_ORDER } from "../actions/orders";

import CartItem from "../../models/cart";

const initialState = {
  items: {},
  totalAmount: 0,
};

const cartReducer = (state = initialState, action : any) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const productValue = addedProduct.price;
      const productTitle = addedProduct.title;
      const productURL = addedProduct.imageUrl;

      let updatedOrNewCartItem: CartItem;

      if (state.items[addedProduct.id]) {
        // update items -  existing one
        updatedOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          productValue,
          productTitle,
          state.items[addedProduct.id].sum + productValue,
          productURL
        );
      } else {
        updatedOrNewCartItem = new CartItem(
          1,
          productValue,
          productTitle,
          productValue,
          productURL
        );
        // adding a new item to Cart dinamically
      }

      return {
        ...state, //copy of our state
        items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + productValue,
      };

    case REMOVE_QUANTITY_FROM_CART:
      const prodId = action.product.id;
      const productPrice = state.items[prodId].productPrice;
      const prodcutTitle = state.items[prodId].productTitle;
      const productSum = state.items[prodId].sum - productPrice;
      const prodcutURL = state.items[prodId].productURL;

      const updateCart = new CartItem(
        state.items[prodId].quantity - 1,
        productPrice,
        prodcutTitle,
        productSum,
        prodcutURL
      );

      if (state.items[prodId].quantity > 1) {
        return {
          ...state,
          items: { ...state.items, [prodId]: updateCart },
          totalAmount: state.totalAmount - productPrice,
        };
      } else {
        delete state.items[prodId];

        return {
          ...state,
          items: { ...state.items },
          totalAmount: state.totalAmount - productPrice,
        };
      }
    case DELETE_PRODUCT_FROM_CART:
      const productId = action.prodId;
      const prodPrice = state.items[productId].productPrice;
      const prodQuantity = state.items[productId].quantity;
      delete state.items[productId];
      const reduceFromTotal = prodPrice * prodQuantity;

      return {
        ...state,
        items: { ...state.items },
        totalAmount: state.totalAmount - reduceFromTotal,
      };
    case ADD_ORDER:
      if (action.type === "ADD_ORDER") {
        return initialState;
      }

    }
    return state;
};

export default cartReducer;
