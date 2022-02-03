import React from 'react';
import { FlatList , Text} from 'react-native';
import { styles } from './styles';
import { RootStateOrAny, useSelector } from 'react-redux';


interface IProductOverview {
    id?: string;
    ownerId?: string;
    title?: string;
    imageUrl?: string;
    description?: string;
    price?: string;
}

const ProductOverview = (props :IProductOverview) => {
    const products = useSelector((state: RootStateOrAny)=> state.products.availableProducts);

    return <FlatList 
                keyExtractor={(item, index) => item.id}
                data={products} 
                renderItem={itemData => <Text>{itemData.item.price}</Text>}

                />
}

export default ProductOverview;