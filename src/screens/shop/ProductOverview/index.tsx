import React from 'react';
import { FlatList} from 'react-native';
import { styles } from './styles';
import { RootStateOrAny, useSelector } from 'react-redux';
import ProductItem from '../../../components/ProductItem';

const ProductOverview = ( ) => {
    const products = useSelector((state: RootStateOrAny)=> state.products.availableProducts);
    return (
        <FlatList 
            data={products}
            keyExtractor={item => item.id}
            renderItem={({item}) =>(
                <ProductItem
                        imageUrl={item.imageUrl}
                        title={item.title}
                        price={item.price} 
                        viewDetails={()=>{}}
                        toCart={()=>{}}
                        onPress={()=>{}}
                         
               />
            )}
           
        
        />
 )
      
}

export default ProductOverview;