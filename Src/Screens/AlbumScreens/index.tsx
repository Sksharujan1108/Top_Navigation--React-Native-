import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AlbumScreen = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.Txt}>AlbumScreen</Text>
    </View>
  )
}

export default AlbumScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    Txt: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
})