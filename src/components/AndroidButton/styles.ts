
import { StyleSheet } from 'react-native';
import themes from '../../global/styles/themes';
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container:{
        width: '36%',
        height: '60%',
        backgroundColor: themes.colors.primary,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
     title: {
        color: themes.colors.white,
        textAlign: 'center',
        flex: 1,
        fontFamily: themes.fonts.MSATitle700Bold,
        fontSize: width < 350 ? 11: 15

    }
});