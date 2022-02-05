import { StyleSheet } from 'react-native';
import  themes  from '../../global/styles/themes';

export const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOffset: {width:0, height: 2},
        shadowRadius: 8,
        shadowOpacity: 0.26,
        elevation: 5,
        borderRadius: 8, 
        backgroundColor: themes.colors.lightGray,
        margin: 20,
        height: 300 // can also be calculated with Dimensions API
    },
    imageContainer:{
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,         
        overflow: 'hidden'
        },
        image: {
        width: '100%',
        height: '100%',
      
    },
    details:{
        alignItems: 'center',
        height: '20%',
        padding: 10
    },
    title:{
        fontSize: 18,
        marginVertical: 4
    },
    price:{
        fontSize: 14,
        color: '#888'
    },
    actions:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%',
        paddingHorizontal: 20
      
    }  
});

 