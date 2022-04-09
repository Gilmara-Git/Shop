
import { StyleSheet } from 'react-native';
import themes from '../../global/styles/themes';
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;


export const styles = StyleSheet.create({
    container:{
        width: '20%',
        height: '60%',     
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
     title: {
        color: themes.colors.primary,
        textAlign: 'center',
        flex: 1,
        fontFamily: themes.fonts.MSATitle700Bold,
        fontSize: width< 320 ? 11 :18
    }
});