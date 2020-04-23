import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native'
import toggleMenu from '../navigation/Drawer'

const win = Dimensions.get ('window')
const h = win.height

const StatusScreen = ({ navigation }) => {
    const {image, name, chat} = styles
    return(
        <View style={{flex: 1, backgroundColor: '#212121', paddingTop: 10}}>
            <View style={chat}>
                <Image
                    style={image}
                    source={require('../images/my_photo.jpeg')}
                />
                <Text style={name}>My status</Text>
            </View>
            <TouchableOpacity
            
                onPress={toggleMenu}
            >
                <Text style={{fontSize: 27, fontWeight: 'bold'}}>Settings</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    chat: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: h/10,
        marginTop: 10
      },
    image: {
        width: h/12,
        height: h/12
      },
      name: {
        width: '75%',
        textAlign: 'left',
        fontSize: 30,
        color: '#57e6ff'
    }
})

export default StatusScreen