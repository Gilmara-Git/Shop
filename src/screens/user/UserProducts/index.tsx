import React from 'react';
import { Text , FlatList } from 'react-native';
import { styles } from './styles';

interface IUserProducts {
    title: string;
}

const UserProducts = (props :IUserProducts) => {
    return <Text>{props.title}</Text>
}

export default UserProducts;