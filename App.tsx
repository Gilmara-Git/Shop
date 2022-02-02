import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, ImageBackground } from 'react-native';
import ProductOverview from './src/screens/shop/ProductOverview';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={ {uri:"https://media.istockphoto.com/photos/bicycle-with-full-clipping-path-picture-id171586627?s=612x612"} }
        style={styles.image}
        resizeMode='center'
        />
      
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
    height: '90%'
  }
});
