import { Text , FlatList, View, Platform, Image } from 'react-native';
import AndroidButton from '../../../components/AndroidButton';
import IosButton from '../../../components/IosButton';
import CartCards from '../../../components/CartCards';
import { styles } from './styles';
import { useSelector, RootStateOrAny } from 'react-redux';


interface ICart {
    title: string;
    
  }

const Cart = (props :ICart) => {
    const cartTotalAmount = useSelector((state: RootStateOrAny) => state.cart.totalAmount);
    const cartItems = useSelector((state:RootStateOrAny)=> {
        const transformedCartItems = [];
        for(let key in state.cart.items){
            transformedCartItems.push({
                prodId: key,
                prodPrice: state.cart.items[key].productPrice,
                prodTitle: state.cart.items[key].productTitle,
                prodSum: state.cart.items[key].sum,
                prodQuantity: state.cart.items[key].quantity,
                prodImageURL: state.cart.items[key].productURL      
            })
    
        }
    
        return transformedCartItems;
    });
   
console.log(cartItems, 'CARTITEMS')
    return  (
        <>
           <FlatList 
            data={cartItems}
            keyExtractor={(item)=>item.id}
            renderItem={(itemData)=> (
                                    <CartCards
                                        prodImageURL={itemData.item.prodImageURL}
                                        prodTitle={itemData.item.prodTitle}
                                       
                                        prodPrice={itemData.item.prodPrice}
                                        prodQuantity={itemData.item.prodQuantity}
                                    
                                    />)}
            
            />

          
 
        <View style={styles.totalContainer}>
            <Text style={styles.total}>Total</Text>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>{cartTotalAmount.toFixed(2)}</Text>
            </View>
            
        </View>

            <View style={styles.buttonContainer}>              
                {Platform.OS === 'android'? 
                <AndroidButton 
                    onPress={()=>{}}
                    title='Buy Now'
                                    /> : 
                <IosButton 
                    onPress={()=>{}}
                    title='Buy Now'/> 
                }
            </View>
        </>
        
        )
       
}

export default Cart;