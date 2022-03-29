import { View, Image, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import themes from "../../global/styles/themes";
import styles from "./styles";
import { EvilIcons } from "@expo/vector-icons";

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
          <Text style={styles.price}>$ {prodPrice.toFixed(2)}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.AntDesign}
              activeOpacity={0.5}
              onPress={() => console.log("Minus")}
            >
              <AntDesign name="minus" size={19} color={themes.colors.orange} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{prodQuantity}</Text>
            <TouchableOpacity
              style={styles.AntDesign}
              activeOpacity={0.5}
              onPress={() => console.log("Plus")}
            >
              <AntDesign name="plus" size={19} color={themes.colors.orange} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => console.log("Trash")}
          >
            <EvilIcons name="trash" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartCards;
