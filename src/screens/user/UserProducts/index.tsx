import React from 'react';
import { FlatList, Platform } from 'react-native';
import ProductItem from '../../../components/ProductItem';
import { RootStateOrAny, useSelector } from 'react-redux';
import AndroidButton from '../../../components/AndroidButton';
import IosButton from '../../../components/IosButton';
import { styles } from './styles';

const UserProducts = () => {
    const userProducts = useSelector((state:RootStateOrAny) => state.products.userProducts);
    console.log(userProducts); 
    return <FlatList 
            data={userProducts} 
            keyExtractor={item =>item.id}
            renderItem={(itemData)=>
                    <ProductItem 
                        title={itemData.item.title}
                        price={itemData.item.price}
                        imageUrl={itemData.item.imageUrl}
                    >
                        {Platform.OS === 'ios'? 
                        (<IosButton title='Edit'/>) : 
                        (<AndroidButton title='Delete'/>)}
                    </ProductItem>
                
                }
            />;
} 

export default UserProducts;