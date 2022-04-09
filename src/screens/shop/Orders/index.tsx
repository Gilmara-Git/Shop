
import { FlatList } from "react-native";
import { useSelector, RootStateOrAny } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../../components/UI/HeaderButton";
import OrderItem from "../../../components/OrderItem";

const Orders = () => {

  const orders = useSelector((state: RootStateOrAny) => state.orders.orders);

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <OrderItem
          date={itemData.item.readableDate}
          totalAmount={itemData.item.totalAmount}
          items={itemData.item.items}
          orderId={itemData.item.id}
          key={itemData.item.id}
        />
      )}
    />
  );
};

Orders.navigationOptions = (navData: any) => {
  return {
    headerTitle: "My Orders",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
export default Orders;
