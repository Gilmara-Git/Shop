import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import themes from '../global/styles/themes';
import ProductOverview  from '../screens/shop/ProductOverview';
import Cart from '../screens/shop/Cart';
import ProductDetail from '../screens/shop/ProductDetail'


const ProductsNavigator =  createStackNavigator({
    Products: {
        screen: ProductOverview
    }, 
    Cart: {
        screen: Cart
    },
    Detail: {
        screen: ProductDetail
    }


},
{
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: Platform.OS === 'ios' ? themes.colors.white:themes.colors.purple
        },
        headerTintColor: Platform.OS === 'ios' ? themes.colors.primary :themes.colors.white
    },
    
})

export default createAppContainer(ProductsNavigator);