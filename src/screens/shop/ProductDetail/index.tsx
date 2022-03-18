import { Text,View,Image, Platform } from 'react-native';
import AndroidButton from '../../../components/AndroidButton';
import IosButton from '../../../components/IosButton';

import { useSelector, RootStateOrAny} from 'react-redux';
import { NavigationStackProp } from 'react-navigation-stack'
import { styles } from './styles';

interface INavigationProps {
    navigation: NavigationStackProp; 
}

const ProductDetail = ({ navigation}:INavigationProps) =>{   
    console.log(navigation, 'navigation on Products Details')
    const prodId = navigation.getParam('prodId');
    const productSelected = useSelector((state: RootStateOrAny) => state.products.availableProducts.find(
            prod=>prod.id === prodId))
   

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
                    <Text style={styles.price}>${productSelected.price}</Text>
                <View style={styles.button}>
                {Platform.OS === 'android' ?
                <AndroidButton               
                    title='Add to Cart'
                    onPress={()=>navigation.navigate({routeName: 'Cart'})}
              />:
              <IosButton 
                    title='Add to Cart'
                    onPress={()=>navigation.navigate({routeName: 'Cart'})}/>
              }
                
                
                </View>
                </View>
            </View>
            
            
            )

}

export default ProductDetail;