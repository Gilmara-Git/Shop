import { StatusBar } from 'expo-status-bar';
import { createStore, combineReducers } from 'redux';
import productsReducer from './src/store/reducers/products';
import cartReducer from './src/store/reducers/cart';
import ordersReducer from './src/store/reducers/orders';
import { Provider } from 'react-redux';
import ShopNavigator from './src/navigation/ShopNavigator';

import  AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';
import { 
  MontserratAlternates_700Bold, 
  MontserratAlternates_300Light,
  MontserratAlternates_600SemiBold_Italic
} from '@expo-google-fonts/montserrat-alternates';
import { enableScreens } from 'react-native-screens';

enableScreens();


const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
});
// export type RootState = ReturnType<typeof rootReducer>

const store =  createStore(rootReducer);

export default function App() {
  const [fontsLoaded] = useFonts({
    MontserratAlternates_700Bold,
    MontserratAlternates_300Light ,
    MontserratAlternates_600SemiBold_Italic
  })
console.log(fontsLoaded, 'fonts loaded')
  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
    <Provider
    store={store}
    >
      <StatusBar style="auto" />
      <ShopNavigator />
    
    </Provider>
  );
}

