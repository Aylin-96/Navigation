import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LogInScreen } from '../screens'
import { TabNavigator } from './Tab'

const Stack = createStackNavigator()

export const StackNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#57e6ff',
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: '#212121' }}}>
            <Stack.Screen name="Log In" component={LogInScreen} />
            <Stack.Screen name="Tab" component={TabNavigator}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}