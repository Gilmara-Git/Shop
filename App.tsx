import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import ProductOverview from './src/screens/shop/ProductOverview';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ProductOverview 
        title="Product Overview!!!"
      />

        
    </View>
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
    height: '80%'
  }
});
