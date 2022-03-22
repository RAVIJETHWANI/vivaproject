import {StyleSheet} from 'react-native';
import {  Platform , } from "react-native";
import colors from '../../../assets/theme/colors';
import normalizeFont from '../../../helpers/FontSize/';

export default StyleSheet.create({
  wrapper: { flex: 1,backgroundColor: 'white'},
  avatarView: { marginTop: Platform.OS === "ios" ? 10 : 10,marginBottom: 5},
 
  form_header: { justifyContent : 'center', flexDirection : 'row', },
  header_text: {fontSize : 15 , fontWeight : 'bold' , paddingBottom : 8,marginLeft :15,marginRight :15},
  underline: { borderBottomWidth :3, borderBottomColor: '#3A3B3C',},
  formView: {  marginTop: 10 },
  input: {
    
   width:'85%',
    borderRadius: 10,
    backgroundColor: '#e5e5e5' ,
    alignSelf:'center',
    marginTop: 6,
    color: "black",
    fontWeight: "bold" ,
    height:55
    
  
},
loginButton: { borderRadius: 30, padding: 16,},
buttonText: { textAlign: "center", fontSize: 16 , color : "#ffffff"},




   
});