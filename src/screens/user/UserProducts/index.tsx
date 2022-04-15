import { FlatList, Platform } from 'react-native';
import ProductItem from '../../../components/ProductItem';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import AndroidButton from '../../../components/AndroidButton';
import IosButton from '../../../components/IosButton';
import HeaderButton from '../../../components/UI/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import * as productActions from  '../../../store/actions/products';
import  { NavigationStackProp } from 'react-navigation-stack';

interface IEditProduct {
    navigation : NavigationStackProp;
}

const UserProducts = ({navigation}: IEditProduct) => {
    console.log(navigation, 'navigation on EditProduct')
    const userProducts = useSelector((state:RootStateOrAny) => state.products.userProducts);
    const dispatch = useDispatch();
    return <FlatList 
            data={userProducts} 
            keyExtractor={item =>item.id}
            renderItem={(itemData)=>
                    <ProductItem 
                        title={itemData.item.title}
                        price={itemData.item.price}
                        imageUrl={itemData.item.imageUrl}
                    >
                        {Platform.OS === 'ios'? 
                        (<IosButton 
                            title='Edit'
                            onPress={()=>{navigation.navigate('EditProduct')}}
                            />) : 
                        (<AndroidButton 
                            title='Edit'
                            onPress={()=>{navigation.navigate('EditProduct')}}
                            />)}

                        {Platform.OS === 'ios'? 
                        (<IosButton 
                            title='Delete'
                            onPress={()=> {dispatch(productActions.deleteProduct(itemData.item.id))}}
                            />) : 
                        (<AndroidButton 
                            title='Delete'
                            onPress={()=>dispatch(productActions.deleteProduct(itemData.item.id))}
                            
                        />)}

                    </ProductItem>
                
                }
            />;
};

UserProducts.navigationOptions = (navData)=>{
    return { 
        headerTitle: 'Your Products',
        headerLeft:()=>(   
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item 
                            title='Menu'
                            iconName='ios-menu'
                            onPress={()=>{navData.navigation.toggleDrawer()}}
                            />
                    </HeaderButtons>
                ),

        headerRight:()=>(
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title='Save'
                              iconName='save'
                              onPress={()=>{console.log('SAVE')}}                        
                        />

                    </HeaderButtons>
        )

    }

}

export default UserProducts;