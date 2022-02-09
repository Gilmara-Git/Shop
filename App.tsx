import { StatusBar } from 'expo-status-bar';
import { createStore, combineReducers } from 'redux';
import productsReducer from './src/store/reducers/products';
import { Provider } from 'react-redux';


import ShopNavigator from './src/navigation/ShopNavigator';



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

