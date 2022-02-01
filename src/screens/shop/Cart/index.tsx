import React from 'react';
import { Text , FlatList } from 'react-native';
import { styles } from './styles';

interface ICart {
    title: string;
}

const Cart = (props :ICart) => {
    return <Text>{props.title}</Text>
}

export default Cart;