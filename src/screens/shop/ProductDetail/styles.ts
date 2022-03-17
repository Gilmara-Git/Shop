import { StyleSheet } from 'react-native';
import themes from './../../../global/styles/themes'


export const styles = StyleSheet.create({  
    imageContainer:{
        width: '100%',
        height: '85%'
    },
   detail:{
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: themes.colors.primary,
       height: '15%',
       padding: 10
   },
   title:{
    fontFamily: themes.fonts.MSATitle700Bold,
    color: themes.colors.white,
    fontSize: 20
},
description:{
    fontFamily: themes.fonts.MSA600SemiBoldItalic,
    color: themes.colors.white,
    fontSize: 12,
    textAlign: 'center'
},
price:{
    fontFamily: themes.fonts.MSA600SemiBoldItalic,
    color: themes.colors.white,
    fontSize: 13,
    textAlign: 'center'
}
    
});