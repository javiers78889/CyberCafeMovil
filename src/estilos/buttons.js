import { StyleSheet } from "react-native";

export const buttons= StyleSheet.create({
    texto:{
        fontSize:20
    },
    container: {
        
        backgroundColor: '#FFFFFF',
        height:800,
        alignItems: 'center',
        justifyContent: 'top',
        padding:30,
        marginBottom:50,
        borderRadius:20,
        width:'100%'
        
      },
      subContainer:{
        flexDirection:'row',
        gap:5
      },

      dash:{
        fontWeight:'bold',
        fontSize:15
      }


})