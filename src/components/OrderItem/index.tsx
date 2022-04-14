import styles from "./styles";
import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

interface IOrderItem {
  totalAmount: number;
  date: string;
  items: [];
  orderId: string;
}

const OrderItem = ({orderId, items, totalAmount, date }: IOrderItem) => {


  const [showDetails, setShowDetails] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.textDate}>{date}</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.textAmount}>
            ${Number(totalAmount.toFixed(2))}
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            setShowDetails((previousState) => !previousState);
          }}
        >
          <Text style={styles.buttonText}>
            {showDetails ? "Hide Details" : "Show Details"}
          </Text>
        </TouchableOpacity>
      </View>

      {showDetails && (
        <View>
          <Text style={styles.orderNumber}>Order #:{orderId}</Text>
          {items.map((cartItem:any) => (
            <View key={cartItem.prodId} >
              <View  style={styles.details}>               
                <Text style={styles.detailText}>{cartItem.prodTitle}</Text>
                <Text style={styles.detailText}>
                  Qty: {cartItem.prodQuantity}
                </Text>
              </View>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: cartItem.prodImageURL }}
                  style={styles.image}
                />
                <Text style={styles.detailText}>$ {cartItem.prodPrice}</Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default OrderItem;
