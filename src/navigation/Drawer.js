import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { UsernameScreen } from '../screens/UsernameScreen'
import { PhotoScreen } from '../screens/PhotoScreen'
import { ProfileScreen } from '../screens/ProfileScreen'

const Drawer = createDrawerNavigator();
export const toggleMenu = () => {
    navigation.toggleDrawer()
}
const MyDrawer = () => {
    return (
        <Drawer.Navigator>
        <Drawer.Screen name="My Username" component={UsernameScreen} /> 
        <Drawer.Screen name="My Photo" component={PhotoScreen} />
        <Drawer.Screen name="My Profile" component={ProfileScreen} />
        </Drawer.Navigator>
      )
}

export default MyDrawer