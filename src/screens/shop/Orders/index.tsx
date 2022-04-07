import { FlatList, Text , View} from 'react-native';
import { styles } from './styles';
import { useSelector, RootStateOrAny } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../../components/UI/HeaderButton';
import { NavigationStackProp } from "react-navigation-stack";

type IOrders  = {
    navigation: NavigationStackProp
}

const Orders = ({navigation}: IOrders)  => {

    const orders  = useSelector((state: RootStateOrAny)=> state.orders.orders);
    console.log(Object.prototype.toString.call(orders))
    for(let order of orders){
        console.log(order.totalAmount, 'ORRRDERRER')
        for(let item of order.items){
            console.log(item.prodPrice, 'sou o item')
        }
    }
    return (
            <FlatList 
                contentContainerStyle={
                    {flex:1, justifyContent: 'center', alignItems: 'center'}
                }
                data={orders} 
                keyExtractor={item=> item.id}
                renderItem={(itemData)=>(
                <View>
                    <Text style={styles.title}>Under Construction</Text>
                    <Text style={styles.title}>Total Amount: ${itemData.item.totalAmount.toFixed(2)}</Text>
                </View>)}
                />
            )

}

Orders.navigationOptions = ( navData: any)=>{
    return { 
        headerTitle: 'My Orders',
        headerLeft: ()=> (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title='Menu' 
                    iconName='ios-menu'
                    onPress={()=>{navData.navigation.toggleDrawer()
                    }}
                    
                />
            </HeaderButtons>)
              
           
    }
}
export default Orders;