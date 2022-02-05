import React from 'react';
import { 
    View, 
    Text, 
    Image, 
    Button, 
    ButtonProps, 
    TouchableOpacity, 
    TouchableOpacityProps,
    TouchableNativeFeedback,
    TouchableNativeFeedbackProps
} from 'react-native';
import { styles } from './styles';



interface IProductOverview extends ButtonProps {
    title: string;
    imageUrl: string;  
    price: string; 
    viewDetails: ()=>void;
    toCart:()=>void;
}


const ProductItem = ({title, imageUrl, price, viewDetails, toCart, ...rest }: IProductOverview)=>{
    return (
    
        <View style={styles.product}>
                    <View style={styles.imageContainer}>
                        <Image source={{uri: imageUrl}}
                            style={styles.image} 
                        />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.price}>${price}</Text>
                    </View>
                <View style={styles.actions}>
                    <Button 
                        {...rest}
                        onPress={viewDetails}                      
                        title='View Details'
                        
                        />

                    <Button 
                        onPress={toCart}
                        title='To Cart' 
                        />

                </View>
               
        </View>
        )
}


export default ProductItem;