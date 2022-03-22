import { Text,View,Image, Platform } from 'react-native';
import AndroidButton from '../../../components/AndroidButton';
import IosButton from '../../../components/IosButton';

import { useSelector, RootStateOrAny, useDispatch} from 'react-redux';
import { NavigationStackProp } from 'react-navigation-stack'
import { styles } from './styles';
import * as cartActions from '../../../store/actions/cart';

interface INavigationProps {
    navigation: NavigationStackProp; 
}

const ProductDetail = ({ navigation}:INavigationProps) =>{   
    
    const prodId = navigation.getParam('prodId');
    const productSelected = useSelector((state: RootStateOrAny) => state.products.availableProducts.find(
        (prod: { id: any; })=>prod.id === prodId));
    
    const dispatch = useDispatch();
        
    return(
      
            <View style={styles.mainContainer}>
                <Image source={{uri: productSelected.imageUrl}}
                resizeMode='cover'
                style={styles.imageContainer}/>
                <View style={styles.detail}>
                    <Text style={styles.title}>{productSelected.title}</Text>
                    <Text 
                        numberOfLines={3}
                        style={styles.description}>{productSelected.description}
                    </Text>
                    <Text style={styles.price}>${productSelected.price.toFixed(2)}</Text>
                <View style={styles.button}>
                {Platform.OS === 'android' ?
                <AndroidButton               
                    title='Add to Cart'
                    onPress={()=>dispatch(cartActions.addToCart(productSelected))}
              />:
              <IosButton 
                    title='Add to Cart'
                    onPress={()=>dispatch(cartActions.addToCart(productSelected))}/>
              }
                
                </View>
                </View>
            </View>
         
            
            )       
}


ProductDetail.navigationOptions = (navData: { navigation: { getParam: (arg0: string) => any; }; })=>{
    return { 
        headerTitle: navData.navigation.getParam('title')    
    }
}

export default ProductDetail;