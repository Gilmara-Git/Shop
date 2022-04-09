import { StyleSheet } from 'react-native';
import themes from '../../../global/styles/themes';

export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    title:{
        fontFamily: themes.fonts.MSATitle700Bold , 
    fontSize: 55   },
    buttonContainer: {
        alignItems: "center",
        backgroundColor: themes.colors.orange,   
        padding: '2%',
        borderRadius: 8,
        marginTop: '2%',      
        marginHorizontal: '30%'// Apply Dimensions API here
     
    },
    buttonText:{
      color: themes.colors.white,
      fontFamily: themes.fonts.MSATitle700Bold,
      fontSize: 14
    }
   
});