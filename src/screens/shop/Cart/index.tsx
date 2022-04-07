import { Text, FlatList, View, TouchableOpacity } from "react-native";
import CartCards from "../../../components/CartCards";
import { styles } from "./styles";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import * as ordersActions from '../../../store/actions/orders';
import { NavigationStackProp } from 'react-navigation-stack';

interface INavigationStackProp {
  navigation: NavigationStackProp;
}

const Cart = ({navigation}:INavigationStackProp) => {
  const dispatch = useDispatch();

  const cartTotalAmount = useSelector(
    (state: RootStateOrAny) => state.cart.totalAmount
  );

  let cartItems = useSelector((state: RootStateOrAny) => {
    const transformedCartItems = [];
    for (let key in state.cart.items) {      
      transformedCartItems.push({
        prodId: key,
        prodPrice: state.cart.items[key].productPrice,
        prodTitle: state.cart.items[key].productTitle,
        prodSum: state.cart.items[key].sum,
        prodQuantity: state.cart.items[key].quantity,
        prodImageURL: state.cart.items[key].productURL,
      });
    }

    return transformedCartItems;
  });
  cartItems.sort((a,b)=>a.prodTitle > b.prodTitle ? 1 : -1); // display cartItems alphabetically

  return (
    <>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.prodId}
        renderItem={(itemData) => (
          <CartCards
            prodImageURL={itemData.item.prodImageURL}
            prodTitle={itemData.item.prodTitle}
            prodPrice={itemData.item.prodPrice}
            prodQuantity={itemData.item.prodQuantity}
            prodId={itemData.item.prodId}
            prodSum={itemData.item.prodSum}
          />
        )}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total</Text>
        <View style={styles.buttonContainer}>
          {cartItems.length !== 0 && (
            <TouchableOpacity
              style={styles.OrderButton}
              activeOpacity={0.5}
              onPress={() => {
               dispatch(ordersActions.addOrder({cartItems, totalAmount: cartTotalAmount}))
              }}
            >
              <Text style={styles.orderText}>ORDER</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>$ {Math.abs(cartTotalAmount).toFixed(2)}</Text>
        </View>
      </View>
    </>
  );
};


Cart.navigationOptions = ()=>{
  return { 
    headerTitle: 'Your Cart'
  }
}
export default Cart;
