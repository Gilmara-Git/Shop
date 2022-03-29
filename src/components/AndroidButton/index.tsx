import { View, Text ,TouchableNativeFeedback, TouchableNativeFeedbackProps} from 'react-native';
import { styles }  from './styles'

interface ITouchableNative extends TouchableNativeFeedbackProps {
    title: string;
 
}

const AndroidButton =({ title, ...rest}:ITouchableNative)=>{
    return (
        <View style={styles.container}>
             <TouchableNativeFeedback                         
            {...rest}
            >
       
            <Text style={styles.title}>{title}</Text>
           
            </TouchableNativeFeedback>  

        </View>    
             

           )
}

export default AndroidButton;