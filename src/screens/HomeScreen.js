import { View, Text, StyleSheet, TouchableOpacity, Image,Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from './tabs/Search'
import Wishlist from './tabs/Wishlist'
import Notification from './tabs/Notification'
import User from './tabs/User'
import Homes from './tabs/Homes'
const HomeScreen = () => {
  const [selectedTab,setSelectedTab]= useState(0);
  const [isKeyboardVisible,setIsKeyboardVisible]=useState(false)
  useEffect(()=>{
    const keyboardDidShowListner= Keyboard.addListener(
      'keyboardWillShow',
      () => {
        setIsKeyboardVisible(true)
      },
    )
    const keyboardDidHideListner=Keyboard.addListener(
      'keyboardWillHide',
      ()=>{
        setIsKeyboardVisible(false)
      },
    )
  })
  return (
    <View style={styles.container}>
      
      {selectedTab==0?(<Homes/>):selectedTab==1?(<Search/>):selectedTab==2?(<Wishlist/>):selectedTab==3?(<Notification/>):(<User/>)}
      {!isKeyboardVisible &&(
         <View style={styles.bottomView}>
         <TouchableOpacity style={styles.bottomTab}onPress={()=>{setSelectedTab(0)}}>
           <Image source={selectedTab==0?require('../images/home.png'):require('../images/empy-home.png')} style={styles.bottomTabIcon}/>
         </TouchableOpacity>
         <TouchableOpacity style={styles.bottomTab}onPress={()=>{setSelectedTab(1)}}>
           <Image source={selectedTab==1?require('../images/search.png'):require('../images/empty-search.png')} style={styles.bottomTabIcon}/>
         </TouchableOpacity>
         <TouchableOpacity style={styles.bottomTab}onPress={()=>{setSelectedTab(2)}}>
           <Image source={selectedTab==2?require('../images/heart.png'):require('../images/empty-heart.png')} style={styles.bottomTabIcon}/>
         </TouchableOpacity>
         <TouchableOpacity style={styles.bottomTab}onPress={()=>{setSelectedTab(3)}}>
           <Image source={selectedTab==3?require('../images/bell.png'):require('../images/empty-bell.png')} style={styles.bottomTabIcon}/>
         </TouchableOpacity>
         <TouchableOpacity style={styles.bottomTab}onPress={()=>{setSelectedTab(4)}}>
           <Image source={selectedTab==4?require('../images/profile.png'):require('../images/empty-user.png')} style={styles.bottomTabIcon}/>
         </TouchableOpacity>
       </View>
      )}
     
    </View>
  )
}

export default HomeScreen
const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  bottomView:{
    position:'absolute',
    bottom:0,
    width:'100%',
    height:70,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor:'white',
  },
  bottomTab:{
    width:'20%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  bottomTabIcon:{
    width:30,
    height:30
  }
})