import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './HomeScreen'
import Homes from './tabs/Homes'
const Drawer=createDrawerNavigator()
const Main = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='HomeScreen'component={HomeScreen} options={{headerShown:false}}/>
    </Drawer.Navigator>
  )
}

export default Main