import { StyleSheet } from 'react-native';
import themes from './../../../global/styles/themes';
import { Dimensions } from 'react-native';
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({  
    mainContainer:{
        height: '100%'
    },
    imageContainer:{
        width: '100%',
        height: height < 550 ? '70%' : '80%',
    },
   detail:{
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: themes.colors.beige,
       height: height < 550 ?'30%': '20%',
       paddingVertical: 25
     
   },
   title:{
    fontFamily: themes.fonts.MSATitle700Bold,
    color: themes.colors.navy,
    fontSize: 20,
    marginTop: 10
},
description:{
    fontFamily: themes.fonts.MSA600SemiBoldItalic,
    color: themes.colors.primary,
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 10
},
price:{
    fontFamily: themes.fonts.MSA600SemiBoldItalic,
    color: themes.colors.navy,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5

},
button:{ 
    margin:3,
    alignItems: 'center'   
},   
});