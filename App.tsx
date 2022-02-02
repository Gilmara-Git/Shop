import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import productsReducer from './src/store/reducers/reducers';
import { Provider } from 'react-redux';


const rootReducer = combineReducers({
  products: productsReducer
});

const store =  createStore(rootReducer);

export default function App() {
  return (
    <Provider
      store={store}
    >

    <View style={styles.container}>
      <StatusBar style="auto" />
     

        
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: '100%',
    height: '90%'
  }
});
