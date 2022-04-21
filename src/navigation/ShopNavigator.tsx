import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import themes from '../global/styles/themes';
import ProductOverview  from '../screens/shop/ProductOverview';
import Cart from '../screens/shop/Cart';
import ProductDetail from '../screens/shop/ProductDetail';
import Orders from '../screens/shop/Orders';
import UserProducts from '../screens/user/UserProducts';
import EditProduct from '../screens/user/EditProduct';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const defaultNavAllPages ={
    headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? themes.colors.white:themes.colors.primary
    },
    headerTintColor: Platform.OS === 'ios' ? themes.colors.primary :themes.colors.white,
    headerTitleStyle:{
        fontFamily: themes.fonts.MSATitle700Bold
    },
    headerBackTitleStyle:{
        fontFamily: themes.fonts.MSATitle700Bold
    },
  
}


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
    navigationOptions:{
        drawerIcon: (drawerConfig: any) =>
            <Ionicons name={Platform.OS === 'android'? 'md-cart': 'ios-cart'}
                  size={23}
                  color={drawerConfig.tintColor}
            />
    },
    defaultNavigationOptions: defaultNavAllPages
}, 
    
)

const OrdersNavigator = createStackNavigator({
    Orders : {
        screen: Orders,
       
    }},
    {   navigationOptions:{
            drawerIcon: (drawerConfig: any) =>
                <Ionicons 
                name={Platform.OS === 'android' ? 'md-list' : 'list'}
                size={23}
                color={drawerConfig.tintColor} />
            
    },
        defaultNavigationOptions: defaultNavAllPages
    });  

   const AdminNavigator = createStackNavigator({
       Admin:{
           screen: UserProducts
       },
       EditProduct:{
           screen: EditProduct
       }
   }, {
       navigationOptions:{
           drawerIcon:(drawerConfig: any)=>
                <MaterialIcons 
                name='admin-panel-settings'
                size={23} 
                color={drawerConfig.tintColor}
                 />
       },
       defaultNavigationOptions: defaultNavAllPages
   }); 

const SideDrawerNavigator = createDrawerNavigator({
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator

},
    {contentOptions: {
        activeTintColor: Platform.OS === 'android' ? themes.colors.white : themes.colors.primary, // color when selected
        activeBackgroundColor : Platform.OS === 'android' ? themes.colors.primary : themes.colors.white,
        labelStyle:{
            fontFamily: themes.fonts.MSATitle700Bold
        }
    }}
);

export default createAppContainer(SideDrawerNavigator);