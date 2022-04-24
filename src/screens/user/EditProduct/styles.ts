import { StyleSheet } from 'react-native';
import themes from '../../../global/styles/themes';

export const styles = StyleSheet.create({
    formContainer:{
        flex: 1,
        backgroundColor: themes.colors.beige, 
        paddingTop: '3%'
 
    },
    labelContainer:{
        padding: '3%',
        width: '100%'  
    },
    labelText:{
        fontFamily: themes.fonts.MSATitle700Bold,
        color: themes.colors.navy,     
        fontSize: 20,       
    },
    editableInput:{
        fontFamily: themes.fonts.MSA600SemiBoldItalic,
        color: themes.colors.orange,
        paddingVertical: '2%',
        fontSize: 16, 
        borderBottomWidth: 1,
        borderColor:themes.colors.lavender  
    },
    title:{
        fontFamily: themes.fonts.MSA600SemiBoldItalic,
        color: themes.colors.orange,
        fontSize: 14
    }
});