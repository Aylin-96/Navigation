import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ProfileScreen = ({route}) => {
    const { name, chat} = styles
    return(
        <View style={{flex: 1, backgroundColor: '#212121'}}>
            <View style={chat}>
                <Image
                    style={{height: 100, width: 100, borderRadius: 400/2}}
                    source={require('../images/my_photo.jpeg')}
                />
                <View>
                    <Text style={name}>Username: {route.params.username}</Text>
                    <Text style={name}>Number: 0505026906</Text>
                    <Text style={name}>Status: Online</Text>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    chat: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 25
      },
      name: {
        textAlign: 'left',
        fontSize: 25,
        color: 'gray'
    }
})

export { ProfileScreen }
