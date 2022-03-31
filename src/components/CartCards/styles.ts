import { StyleSheet } from 'react-native';
import themes from '../../global/styles/themes';

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '5%',
        marginHorizontal: '8%',
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
        marginLeft: '2%',
        justifyContent: 'space-around',
        height: '80%' ,
        width: '100%'
    },
    title:{
        fontFamily: themes.fonts.MSATitle700Bold,
        fontSize: 17
    },
    details:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '74%'   
    },
    price:{
        fontSize: 16,
        color: themes.colors.primary,
        fontFamily: themes.fonts.MSA600SemiBoldItalic,
    },
    quantityContainer:{
        backgroundColor: themes.colors.lavender,
        paddingHorizontal:5,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    AntDesign:{
        // marginHorizontal: '2%',
        paddingHorizontal: '3%'
    },
    quantity:{
        fontSize: 18,
        fontFamily: themes.fonts.MSATitle700Bold,
        color: themes.colors.primary,
        margin: 2,
        padding: 2
    },
   
});

export default styles;