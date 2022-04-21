import { FlatList, Platform } from "react-native";
import ProductItem from "../../../components/ProductItem";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import AndroidButton from "../../../components/AndroidButton";
import IosButton from "../../../components/IosButton";
import HeaderButton from "../../../components/UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import * as productActions from "../../../store/actions/products";
import { NavigationStackProp } from "react-navigation-stack";

interface IUserProduct {
  navigation: NavigationStackProp;
}

const UserProducts = ({ navigation }: IUserProduct) => {

  const userProducts = useSelector(
    (state: RootStateOrAny) => state.products.userProducts
  );
  userProducts.sort((a: {title: string},b: {title: string})=> a.title > b.title ? 1 :-1);

  const dispatch = useDispatch();
  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          title={itemData.item.title}
          price={itemData.item.price}
          imageUrl={itemData.item.imageUrl}
        >
          {Platform.OS === "ios" ? (
            <IosButton
              title="Edit"
              onPress={() => {
                navigation.navigate({
                  routeName: "EditProduct",
                  params: { prodId: itemData.item.id },
                });
              }}
            />
          ) : (
            <AndroidButton
              title="Edit"
              onPress={() => {
                navigation.navigate({
                    routeName: "EditProduct",
                    params: { prodId: itemData.item.id },
                  });
              }}
            />
          )}

          {Platform.OS === "ios" ? (
            <IosButton
              title="Delete"
              onPress={() => {
                dispatch(productActions.deleteProduct(itemData.item.id));
              }}
            />
          ) : (
            <AndroidButton
              title="Delete"
              onPress={() =>
                dispatch(productActions.deleteProduct(itemData.item.id))
              }
            />
          )}
        </ProductItem>
      )}
    />
  );
};

UserProducts.navigationOptions = (navData : any) => {
  return {
    headerTitle: "Your Products",
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

    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add"
          iconName={Platform.OS ==='android'? 'add-circle-outline': 'ios-add-circle'}
          onPress={() => {
            navData.navigation.navigate('EditProduct'); 
            // here we are not passing params as we will create a product
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default UserProducts;
