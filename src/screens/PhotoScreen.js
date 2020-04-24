import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const PhotoScreen = () => {
    const {info} = styles
    return(
        <View style={info}>
            <Image
                style={{width: 400, height: 400}}
                source={require('../images/my_photo.jpeg')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212121'
    }
})
export { PhotoScreen }