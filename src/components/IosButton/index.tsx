import { TouchableOpacity, TouchableOpacityProps,View,Text} from 'react-native';
import { styles }  from './styles'

interface ITouchableOpacity extends TouchableOpacityProps  {
    title: string;
  
}

const IosButton =({title, ...rest}:ITouchableOpacity)=>{
    return (
        <View style={styles.container}>
             <TouchableOpacity               
                activeOpacity={0.6}
                       
            {...rest}
            >
       
            <Text style={styles.title}>{title}</Text>
           
            </TouchableOpacity>  

        </View>    
             

           )
}

export default IosButton;