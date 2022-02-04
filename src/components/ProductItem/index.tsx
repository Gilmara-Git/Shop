import React from 'react';
import { View, Text, Image, Button, ButtonProps } from 'react-native';
import { styles } from './styles';



interface IProductOverview {
    title: string;
    imageUrl: string;  
    price: string; 
}


const ProductItem = ({title, imageUrl, price}: IProductOverview)=>{
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
                        onPress={()=>{}}                      
                        title='View Details'
                        />

                    <Button 
                        onPress={()=>{}}
                        title='To Cart' 
                        />

                </View>
               
        </View>
        )
}


export default ProductItem;