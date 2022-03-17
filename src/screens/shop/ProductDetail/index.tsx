import { Text,View,Image} from 'react-native';
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
            <View>
                <Image source={{uri: productSelected.imageUrl}}
                resizeMode='cover'
                style={styles.imageContainer}/>
                <View style={styles.detail}>
                    <Text style={styles.title}>{productSelected.title}</Text>
                    <Text 
                        numberOfLines={3}
                        style={styles.description}>{productSelected.description}
                    </Text>
                    <Text style={styles.price}>{productSelected.price}</Text>
                </View>
            </View>
            
            
            )

}

export default ProductDetail;