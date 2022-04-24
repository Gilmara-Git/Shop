import { View, Image, Text, TouchableOpacity } from "react-native";
import { useSelector , RootStateOrAny } from 'react-redux';

import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import  { useDispatch } from 'react-redux';
import * as cartActions from '../../store/actions/cart';
import themes from "../../global/styles/themes";
import styles from "./styles";
interface ICartCards {
  prodImageURL: string;
  prodPrice: number;
  prodQuantity: number;
  prodTitle: string;
  prodId: string;
  prodSum: number;
}

const CartCards = ({
  prodImageURL,
  prodTitle,
  prodPrice,
  prodQuantity,
  prodId,
  prodSum
}: ICartCards) => {

  const dispatch = useDispatch();
  const product = useSelector((state:RootStateOrAny)=>{
    return state.products.availableProducts.find((item: { id: string; })=>item.id === prodId);
  });
  
  return (
    <View style={styles.rowContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: prodImageURL }} />
      </View>
      <View style={styles.columnContainer}>
        <Text style={styles.title}>{prodTitle}</Text>
        <View style={styles.details}>
          <Text style={styles.price}>${Number(prodSum).toFixed(2)}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.AntDesign}
              activeOpacity={0.5}
              onPress={() => dispatch(cartActions.removeQuantityFromCart(product))}
            >
              <AntDesign name="minus" size={19} color={themes.colors.orange} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{prodQuantity}</Text>
            <TouchableOpacity
                style={styles.AntDesign}
                activeOpacity={0.5}
                onPress={() => dispatch(cartActions.addToCart(product))}
              >
                <AntDesign name="plus" size={19} color={themes.colors.orange} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => dispatch(cartActions.deleteProductFromCart(product.id))}
          >
            <EvilIcons name="trash" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartCards;
