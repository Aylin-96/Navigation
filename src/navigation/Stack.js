import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../screens/ProfileScreen'
import ChatScreen from '../screens/ChatScreen'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export const MyStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Chats" component={ChatScreen}
                options={{headerMode: 'none'}} />
        </Stack.Navigator>
    )
}