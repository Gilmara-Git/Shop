import React from 'react';
import { Text , FlatList } from 'react-native';
import { styles } from './styles';

interface IEditProduct {
    title: string;
}

const EditProduct = (props :IEditProduct) => {
    return <Text>{props.title}</Text>
}

export default EditProduct;