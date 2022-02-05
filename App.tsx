import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createStore, combineReducers } from 'redux';
import productsReducer from './src/store/reducers/products';
import { Provider } from 'react-redux';

import ShopNavigator from './src/navigation/ShopNavigator';
import ProductOverview from './src/screens/shop/ProductOverview';


const rootReducer = combineReducers({
  products: productsReducer
});
// export type RootState = ReturnType<typeof rootReducer>

const store =  createStore(rootReducer);

export default function App() {
  return (
    <Provider
      store={store}
    >
      <StatusBar style="auto" />
      <ShopNavigator />
    
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
