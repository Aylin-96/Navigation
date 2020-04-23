import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Chatscreen from './ChatScreen'
import { NavigationContainer } from '@react-navigation/native'
import { MyTab } from '../navigation/Tab'
//import { TouchableOpacity } from 'react-native-gesture-handler'

const ProfileScreen = ({ navigation }) => {
    const { profile, number, text, btn } = styles
    return(
        <View style={profile}>
            <View style={{flexDirection: "row"}}>
                <Text style={number}>Number:</Text>
                <Text style={text}>+994505026906</Text>
            </View>
            <View style={{
                flexDirection: "row",
                paddingTop: 10
                }}
            >
                <Text style={number}>Code:</Text>
                <Text style={text}>****</Text>
            </View>
            <TouchableOpacity
                style={btn}
                onPress={() => navigation.navigate('Chats')}
            >
                <Text style={{fontSize: 27, fontWeight: 'bold'}}>Log In</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        //backgroundColor: '#57e6ff',
        fontSize: 25,
        width: '25%',
        textAlign: 'left',
        color: '#57e6ff'
    },
    text: {
        width: '50%',
        paddingLeft: 20,
        fontSize: 25,
        color: '#57e6ff'
    },
    btn: {
        marginTop: 35,
        width: '23%',
        height: 40,
        backgroundColor: '#57e6ff',
        alignItems: 'center'
    }
})

export default ProfileScreen
