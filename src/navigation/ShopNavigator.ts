import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ProductOverview  from '../screens/shop/ProductOverview';
import { Platform } from 'react-native';
import themes from '../global/styles/themes';


const ProductsNavigator =  createStackNavigator({
    ProductsOverviewScreen: ProductOverview

},
{
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: Platform.OS === 'ios' ? themes.colors.white:themes.colors.primary
        },
        headerTintColor: Platform.OS === 'ios' ? themes.colors.primary :themes.colors.white
    },
    
})

export default createAppContainer(ProductsNavigator);