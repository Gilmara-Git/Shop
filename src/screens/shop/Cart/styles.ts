import { StyleSheet } from 'react-native';
import themes from '../../../global/styles/themes';

export const styles = StyleSheet.create({
    totalContainer:{        
        flexDirection: 'row',
        height: 62,
        justifyContent: 'space-between',
        padding: 15,
        marginHorizontal:'8%',    
        margin: '5%',
        borderRadius: 8,
        alignItems:'center',
        backgroundColor: themes.colors.orange,
        shadowColor: themes.colors.lavender,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        shadowOpacity: 0.26,
        elevation: 5,
      
    },  
    buttonContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 62
    },
    OrderButton:{
        backgroundColor: themes.colors.primary,     
        justifyContent: 'center',
        padding: '5%',
        borderRadius: 8,
        width: '100%',
        },
    orderText:{
        color: themes.colors.lavender,
        fontFamily: themes.fonts.MSATitle700Bold,
        fontSize: 14,
        textAlign: 'center'
     
    },
    total:{
        fontSize: 19,
        fontFamily: themes.fonts.MSATitle700Bold,
        color: themes.colors.lavender
    },
    amountContainer:{
        backgroundColor: themes.colors.lavender,
        paddingHorizontal:5,
        borderRadius: 5,
        alignItems: 'center'
    },
    amount:{
        fontSize: 19,
        fontFamily: themes.fonts.MSA600SemiBoldItalic,
        color: themes.colors.navy
        
    }
    
});