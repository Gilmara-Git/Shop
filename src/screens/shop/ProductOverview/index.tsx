import { FlatList, Button, ButtonProps } from 'react-native';
import { RootStateOrAny, useSelector } from 'react-redux';
import ProductItem from '../../../components/ProductItem';
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
                   <Button 
                        title='Details'
                        onPress={()=>navigation.navigate({routeName: 'Detail'})}
                        />
                   <Button 
                        title='To Cart'
                        onPress={()=>navigation.navigate({routeName: 'Cart'})}/>
                   </ProductItem>
            )}  
            
        />         
 )
      
}

ProductOverview.navigationOptions = {
    headerTitle: 'All products'
}

export default ProductOverview;