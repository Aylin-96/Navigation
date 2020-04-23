import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ChatScreen from '../screens/ChatScreen'
import StatusScreen from '../screens/StatusScreen'

const Tab = createMaterialTopTabNavigator()

export const MyTab = () => {
    return(
        <Tab.Navigator 
            tabBarOptions={{activeTintColor: 'black',
            style: { backgroundColor: '#57e6ff' },
            labelStyle: { fontSize: 23 }}}>
            <Tab.Screen name="Chats" component={ChatScreen}/>
            <Tab.Screen name="Status" component={StatusScreen}/>
        </Tab.Navigator>
    )
}
