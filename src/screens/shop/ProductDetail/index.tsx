import React from 'react';
import { Text , FlatList } from 'react-native';
import { styles } from './styles';

interface IProductDetail {
    title: string;
}

const ProductDetail = (props :IProductDetail) => {
    return <Text>{props.title}</Text>
}

export default ProductDetail;