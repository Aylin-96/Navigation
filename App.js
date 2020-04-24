import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Header from './src/components/Header'
import { StackNavigator } from './src/navigation/Stack'

export default class App extends Component{
  render() {
    const {container} = styles
    return(
      <View style={container}>
        <Header/>
        <NavigationContainer>
          <StackNavigator/>
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
