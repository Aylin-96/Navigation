import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import Header from './src/components/Header'
import {MyStack} from './src/navigation/Stack'
import { MyTab } from './src/navigation/Tab'
import ChatScreen from './src/screens/ChatScreen'
import StatusScreen from './src/screens/StatusScreen'
import ProfileScreen from './src/screens/ProfileScreen'

export default class App extends Component{
  render() {
    const {container} = styles
    return(
      <View style={container}>
        <Header/>
        <NavigationContainer>
          <MyTab/>
        </NavigationContainer>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121'
  }
})
