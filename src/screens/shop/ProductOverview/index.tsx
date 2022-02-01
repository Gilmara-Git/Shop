import React from 'react';
import { Text , FlatList } from 'react-native';
import { styles } from './styles';

interface IProductOverview {
    title: string;
}

const ProductOverview = (props :IProductOverview) => {
    return <Text>{props.title}</Text>
}

export default ProductOverview;