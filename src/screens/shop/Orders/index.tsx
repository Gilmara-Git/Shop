import React from 'react';
import { Text , FlatList } from 'react-native';
import { styles } from './styles';

interface IOrders {
    title: string;
}

const Orders = (props :IOrders) => {
    return <Text>{props.title}</Text>
}

export default Orders;