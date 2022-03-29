import { View, Image, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import themes from "../../global/styles/themes";
import styles from "./styles";

interface ICartCards {
  prodImageURL: string;
  prodPrice: number;
  prodQuantity: number;
  prodTitle: string;
}

const CartCards = ({
  prodImageURL,
  prodPrice,
  prodQuantity,
  prodTitle,
}: ICartCards) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: prodImageURL }} />
      </View>
      <View style={styles.columnContainer}>
        <Text style={styles.title}>{prodTitle}</Text>
        <View style={styles.details}>
          <Text style={styles.price}>{prodPrice.toFixed(2)}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => console.log("Minus")}
            >
              <AntDesign name="minus" size={19} color={themes.colors.orange}/>
            </TouchableOpacity>
            <Text style={styles.quantity}>{prodQuantity}</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => console.log("Plus")}
            >
              <AntDesign name="plus" size={19} color={themes.colors.orange} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartCards;
