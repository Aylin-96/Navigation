import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { UsernameScreen, PhotoScreen, StatusScreen, HelpScreen, AdvancedScreen, LogOutScreen, SettingsScreen } from '../screens'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerStyle={{
          backgroundColor: '#57e6ff',
        }}>
          <Drawer.Screen name="Settings Menu" component={SettingsScreen} />
          <Drawer.Screen name="My Username" component={UsernameScreen} /> 
          <Drawer.Screen name="My Photo" component={PhotoScreen} />
          <Drawer.Screen name="My Status" component={StatusScreen} />
          <Drawer.Screen name="Help" component={HelpScreen} />
          <Drawer.Screen name="Advanced Settings" component={AdvancedScreen} />
          <Drawer.Screen name="Log Out" component={LogOutScreen} />
        </Drawer.Navigator>
      )
}

export default DrawerNavigator