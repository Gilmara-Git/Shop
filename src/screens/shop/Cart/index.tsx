import { Text, FlatList, View, TouchableOpacity } from "react-native";
import CartCards from "../../../components/CartCards";
import { styles } from "./styles";
import { useSelector, RootStateOrAny } from "react-redux";

const Cart = () => {
  const cartTotalAmount = useSelector(
    (state: RootStateOrAny) => state.cart.totalAmount
  );

  // const cartItems1 = useSelector((state: RootStateOrAny) => state.cart.items)
  // console.log(cartItems1, '......................................')
  const cartItems = useSelector((state: RootStateOrAny) => {
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

  console.log(cartItems.length, "CARTITEMS");
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
                console.log("testando");
              }}
            >
              <Text style={styles.orderText}>Order Now</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>$ {cartTotalAmount.toFixed(2)}</Text>
        </View>
      </View>
    </>
  );
};

export default Cart;
