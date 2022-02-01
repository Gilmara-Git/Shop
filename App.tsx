import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
        <Image 
        source={{ uri:"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}}
        style={styles.image}
        resizeMode="center"
        />
      <View style={styles.card}>
        <View>
            <Button title="Details"/>
            <Button title="Cart"/>
        </View>

      </View>
      <StatusBar style="auto" />
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
