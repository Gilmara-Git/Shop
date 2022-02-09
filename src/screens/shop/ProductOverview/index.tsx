import { FlatList, Button, Platform } from 'react-native';
import { RootStateOrAny, useSelector } from 'react-redux';
import ProductItem from '../../../components/ProductItem';
import CustomButton from '../../../components/CustomButton';
import { NavigationStackProp } from 'react-navigation-stack';
import themes from '../../../global/styles/themes';



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
                    <Button
                        color={themes.colors.primary} 
                        title='Details'
                        onPress={()=>navigation.navigate({routeName: 'Details'})}/>:
                        
                    <CustomButton
                        title='Details'
                        onPress={()=>navigation.navigate({routeName: 'Details'})}
                         />}
                   
                   {Platform.OS === 'ios'? 
                    <Button
                        color={themes.colors.primary} 
                        title='Cart'
                        onPress={()=>navigation.navigate({routeName: 'Cart'})}/>:
                        
                    <CustomButton
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