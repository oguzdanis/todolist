import {
    StyleSheet,
  } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f9f9f9',
    },
    header:{
      backgroundColor:'#FFF',
      height:50,
      borderWidth:1,
      alignItems:'center',
      justifyContent:'center',
      marginBottom:15,
    },
    headerText:{
      fontSize:19,
      fontWeight:'bold',
    },
    itemBox:{
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
      margin:2,
      backgroundColor:'#FFF',
      borderRadius:20,
      marginLeft:10,
      marginRight:10,
      padding:10,
    },
    itemTitle:{
      flex:1,
      fontWeight:'bold',
      fontSize:14,
      color:'#000',
    },
    itemCheckTrue:{
      flex:0,
      width:20,
      height:20,
      borderRadius:10,
      backgroundColor:'green',
    },
    itemCheckFalse:{
      flex:0,
      width:20,
      height:20,
      borderRadius:10,
      backgroundColor:'red',
    },
    itemTitleTrue:{
      textDecorationLine:'line-through',
      color:'#ccc',
      fontStyle:'italic',
    },
    itemContainer:{
      flex:1,
    },
    createButton:{
      backgroundColor:'#06f',
      width:80,
      height:80,
      borderRadius:40,
      alignItems:'center',
      justifyContent:'center',
    },
    createButtonText:{
      color:'white',
      fontSize:50,
    },
    containerButton:{
      alignItems:'center',
      justifyContent:'center',
    },
  });