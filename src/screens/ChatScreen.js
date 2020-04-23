import React from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'
import { MyTab } from '../navigation/Tab'

const win = Dimensions.get ('window')
const h = win.height

const ChatScreen = () => {
    const { chats, chat, image, name } = styles
    return(
        <View style={{flex: 1, backgroundColor: '#212121', paddingTop: 10}}>
        <View style={chats}>
            <View style={chat}>
                <Image
                    style={image}
                    source={require('../images/mrn.jpeg')}
                />
                <Text style={name}>MRN170220 </Text>
            </View>
            <View style={chat}>
                <Image
                    style={image}
                    source={require('../images/default_avatar.jpg')}/>
                <Text style={name}>Elmar m. </Text>
            </View>
            <View style={chat}>
                <Image
                    style={image}
                    source={require('../images/default_avatar.jpg')}
                />
                <Text style={name}>Javid </Text>
            </View>
            <View style={chat}>
                <Image
                    style={image}
                    source={require('../images/default_avatar.jpg')}
                />
                <Text style={name}>Samir </Text>
            </View>
            <View style={chat}>
                <Image
                    style={image}
                    source={require('../images/default_avatar.jpg')}
                />
                <Text style={name}>Rahid </Text>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
  chats: {
    paddingLeft: 15,
    height: h/2,
    justifyContent: 'space-around'
  },
  chat: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
    //height: h/10
  },
  image: {
    width: h/13,
    height: h/13
  },
  name: {
    width: '75%',
    textAlign: 'left',
    fontSize: 27,
    color: '#57e6ff'
  }
})

export default ChatScreen