import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const AdvancedScreen = () => {
    const {info} = styles
    return(
        <View style={info}>
            <Text style={{color: '#57e6ff', fontSize: 30}}>Advanced Settings</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212121',
    }
})

export { AdvancedScreen }