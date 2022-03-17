
import { StyleSheet } from 'react-native';
import themes from '../../global/styles/themes';


export const styles = StyleSheet.create({
    container:{
        width: '26%',
        height: '60%',
        // backgroundColor: themes.colors.primary,
        // borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
     title: {
        color: themes.colors.primary,
        textAlign: 'center',
        flex: 1,
        fontFamily: themes.fonts.MSATitle700Bold,
        fontSize: 18
     
     
    }
});