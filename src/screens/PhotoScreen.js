import React from 'react'
import { View, StyleSheet } from 'react-native'

const PhotoScreen = () => {
    const {info} = styles
    return(
        <View style={info}>
            <Image
                style={{height: 70, weight: 70}}
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
export default PhotoScreen