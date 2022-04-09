import {ReactNode} from 'react';
import { 
    View, 
    Text, 
    Image, 
 
} from 'react-native';
import { styles } from './styles';

type IProductOverview =  {
    title: string;
    imageUrl: string;  
    price: string; 
    children: ReactNode;

  };


const ProductItem = ({title, imageUrl, price, children, }: IProductOverview)=>{
   
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
                    {children}             
                </View>   
        </View>
       
        )
}

export default ProductItem;