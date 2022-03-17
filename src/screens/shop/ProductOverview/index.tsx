import { FlatList,Platform } from 'react-native';
import { RootStateOrAny, useSelector } from 'react-redux';
import ProductItem from '../../../components/ProductItem';
import AndroidButton from '../../../components/AndroidButton'; 
import IosButton from '../../../components/IosButton'
import { NavigationStackProp } from 'react-navigation-stack';

interface INavigationProps {
    navigation: NavigationStackProp
}

const ProductOverview = ({navigation}: INavigationProps) => {
    console.log(navigation)
    const products = useSelector((state: RootStateOrAny)=> state.products.availableProducts);
    return (
        <FlatList 
            data={products}
            keyExtractor={item => item.id}
            renderItem={({item}) =>(
                <ProductItem
                        imageUrl={item.imageUrl}
                        title={item.title}
                        price={item.price}         
               >
                    
                    {Platform.OS === 'ios'? 
                    <IosButton                      
                        title='Details'
                        onPress={()=>navigation.navigate({routeName: 'Details', params:{ prodId: item.id }})}/>:
                        
                    <AndroidButton
                        title='Details'
                        onPress={()=>navigation.navigate({routeName: 'Details', params: {prodId: item.id}})}
                         />}
                   
                   {Platform.OS === 'ios'? 
                    <IosButton                      
                        title='Cart'
                        onPress={()=>navigation.navigate({routeName: 'Cart'})}/>:
                        
                    <AndroidButton
                        title='Cart'
                        onPress={()=>navigation.navigate({routeName: 'Cart'})}
                         />}
                </ProductItem>
            )}  
            
        />         
 )
      
}

ProductOverview.navigationOptions = {
    headerTitle: 'All products'
}



export default ProductOverview;