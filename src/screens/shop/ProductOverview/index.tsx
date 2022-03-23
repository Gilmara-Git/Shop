import { FlatList, Platform, TouchableOpacity, TouchableNativeFeedback } from "react-native";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import ProductItem from "../../../components/ProductItem";
import AndroidButton from "../../../components/AndroidButton";
import IosButton from "../../../components/IosButton";
import { NavigationStackProp } from "react-navigation-stack";
import * as cartActions from '../../../store/actions/cart';
import HeaderButton from '../../../components/UI';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

interface INavigationProps {
  navigation: NavigationStackProp;
}

const ProductOverview = ({ navigation }: INavigationProps) => {

  
  const products = useSelector(
    (state: RootStateOrAny) => state.products.availableProducts
    );
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <TouchableOpacity
          onPress={()=>navigation.navigate({routeName: "Details", params:{
          prodId: itemData.item.id,
          title: itemData.item.title

        }})}>
          <ProductItem
            imageUrl={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price.toFixed(2)}
          >
            
            {Platform.OS === "ios" ? (
              <IosButton
                title="Details"
                onPress={() =>
                  navigation.navigate({
                    routeName: "Details",
                    params: {
                      prodId: itemData.item.id,
                      title: itemData.item.title,
                    },
                  })
                }
              />
            ) : (
              <AndroidButton
                title="Details"
                onPress={() =>
                  navigation.navigate({
                    routeName: "Details",
                    params: { prodId: itemData.item.id,
                    title: itemData.item.title,  
                  },
                  })
                }
              />
            )}

            {Platform.OS === "ios" ? (
              <IosButton
                title="Cart"
                onPress={() => dispatch(cartActions.addToCart(itemData.item))}
              />
            ) : (
              <AndroidButton
                title="Cart"
                onPress={() => dispatch(cartActions.addToCart(itemData.item))}
              />
            )}
          </ProductItem>
        </TouchableOpacity>
      )}
    />
  );
};

ProductOverview.navigationOptions =(navData)=> {
  console.log(navData, 'navDATA')
  return { 
    headerTitle: "All products",
    headerRight: ()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item 
      title='Cart'
      iconName={Platform.OS === 'android'? 'md-cart': 'ios-cart'}
      onPress={()=>{navData.navigation.navigate({routeName: 'Cart'})}}
      />

  </HeaderButtons>
  }

};

export default ProductOverview;
