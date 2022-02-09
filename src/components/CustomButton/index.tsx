import { TouchableOpacity, TouchableOpacityProps,View, Text ,TouchableNativeFeedback, TouchableNativeFeedbackProps} from 'react-native';
import { styles }  from './styles'

interface ITouchableNative extends TouchableNativeFeedbackProps {
    title: string;
   
}

const CustomButton =({title, ...rest}:ITouchableNative)=>{
    return (
        <View style={styles.container}>
             <TouchableNativeFeedback               
            // activeOpacity={0.6}           
            {...rest}
            >
       
            <Text style={styles.text}>{title}</Text>
           
            </TouchableNativeFeedback>  

        </View>    
             

           )
}

export default CustomButton;