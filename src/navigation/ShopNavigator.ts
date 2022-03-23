import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import themes from '../global/styles/themes';
import ProductOverview  from '../screens/shop/ProductOverview';
import Cart from '../screens/shop/Cart';
import ProductDetail from '../screens/shop/ProductDetail';

const ProductsNavigator =  createStackNavigator({
    Products: {
        screen: ProductOverview,
        
    }, 
    Cart: {
        screen: Cart
    },
    Details: {
        screen: ProductDetail,
        
    }
},
{
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: Platform.OS === 'ios' ? themes.colors.white:themes.colors.primary
        },
        headerTintColor: Platform.OS === 'ios' ? themes.colors.primary :themes.colors.white,
        headerTitleStyle:{
            fontFamily: themes.fonts.MSATitle700Bold
        },
        headerBackTitleStyle:{
            fontFamily: themes.fonts.MSATitle700Bold
        }
    }
   
})

export default createAppContainer(ProductsNavigator);