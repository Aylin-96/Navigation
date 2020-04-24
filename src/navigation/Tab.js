import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ChatScreen, ProfileScreen, AboutScreen} from '../screens'
import DrawerNavigator from './Drawer'

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
    return(
        <Tab.Navigator //initialRouteName='Chats'
            tabBarOptions={{activeTintColor: 'black', inactiveTintColor: 'dimgray',
            style: { backgroundColor: '#57e6ff', height: 40},
            labelStyle: { fontSize: 22}}}>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
            <Tab.Screen name="Chats" component={ChatScreen}/>
            <Tab.Screen name="About Me" component={AboutScreen}/>
            <Tab.Screen name="Settings" component={DrawerNavigator}/>
        </Tab.Navigator>
    )
}
