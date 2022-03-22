import {StyleSheet} from 'react-native';
import {  Platform , } from "react-native";
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",    
    },
    box:{
      flex: 1,
      justifyContent : 'space-around' , 
      alignItems : 'center' ,  
      flexDirection :'row'
    },
    dropBox:{
      padding : 50 ,
      backgroundColor : colors.button,
      borderRadius : 20
    },
    dropBoxText:{
     fontSize : 20,
     color : 'white'
    },
    
});