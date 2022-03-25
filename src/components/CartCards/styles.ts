import { StyleSheet } from 'react-native';
import themes from '../../global/styles/themes';

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '5%',
        marginHorizontal: '10%',
        paddingLeft: '2%',
        borderRadius: 8,
        height: 100,
        shadowColor: themes.colors.lavender,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: themes.colors.beige
    },
    imageContainer:{
        width: '20%',
        height: '80%',
    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius: 8,
        
    },
    columnContainer: {
        marginLeft: '3%',
       justifyContent: 'space-between',
        height: '80%' ,
        width: '100%'
    },
    title:{
        fontFamily: themes.fonts.MSATitle700Bold,
        fontSize: 18
    },
    details:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '74%'   
    },
    price:{
        fontSize: 14,
        color: themes.colors.primary,
        fontFamily: themes.fonts.MSA600SemiBoldItalic,
    },
    quantityContainer:{
        backgroundColor: themes.colors.lavender,
        paddingHorizontal:6,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    quantity:{
        fontSize: 21,
        fontFamily: themes.fonts.MSATitle700Bold,
        color: themes.colors.primary,
        margin: 10
    },
   
});

export default styles;