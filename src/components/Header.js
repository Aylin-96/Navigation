import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const win = Dimensions.get ('window')
const h = win.height

const Header = () => {
    const { header, headerText } = styles
    return(
        <View style={header}>
            <Text style={headerText}>ReactChat</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: h/8,
        backgroundColor: '#57e6ff',
        justifyContent: 'center',
        paddingLeft: 25
    },
    headerText: {
        textAlign: 'left',
        fontSize: 35,
        fontWeight: 'bold'
    }
})

export default Header