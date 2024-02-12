import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({bg,title,onClick,color}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.btn,{backgroundColor:bg}]}onPress={()=>{
      onClick();
    }}>
      <Text style={{color:color,fontSize:18,fontWeight:'500'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
const styles=StyleSheet.create({
   btn:{
    width:Dimensions.get('window').width-50,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:25,
    marginTop:30,
   } 
})