
import { StyleSheet } from 'react-native';
import themes from '../../global/styles/themes';


export const styles = StyleSheet.create({
    container:{
        width: '26%',
        height: '60%',
        backgroundColor: themes.colors.primary,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
     text: {
        color: themes.colors.white,
        textAlign: 'center',
        flex: 1,
        fontFamily: themes.fonts.MSATitle700Bold,
        fontSize: 15
     
     
    }
});