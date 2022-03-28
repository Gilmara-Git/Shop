import React, {useState} from 'react';
import { Text , FlatList, View, Platform, Button, Pressable, TouchableOpacity} from 'react-native';
import AndroidButton from '../../../components/AndroidButton';
import IosButton from '../../../components/IosButton';
import CartCards from '../../../components/CartCards';
import { styles } from './styles';
import { useSelector, RootStateOrAny } from 'react-redux';
import themes from '../../../global/styles/themes';

interface IButtonProps {
    style:string;
}
interface ICart {
    sytle:string;
    
  }

const Cart = (style:ICart) => {
    const cartTotalAmount = useSelector((state: RootStateOrAny) => state.cart.totalAmount);
  
    // const cartItems1 = useSelector((state: RootStateOrAny) => state.cart.items)
    // console.log(cartItems1, '1111111111111111111111111111111')
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
   
console.log(cartItems.length, 'CARTITEMS')
    return  (
        <>
           <FlatList 
            data={cartItems}
            keyExtractor={(item)=>item.prodId}
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
                <View style={styles.buttonContainer}> 
                { cartItems.length !== 0 &&  
                <TouchableOpacity onPress={()=>{console.log('testando')}}>
                    <Text>ORDER NOW</Text>
                </TouchableOpacity>}             
                 
                  
                    
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{cartTotalAmount.toFixed(2)}</Text>
                </View>
                
            </View>

        </>
        
        )
                }


export default Cart;