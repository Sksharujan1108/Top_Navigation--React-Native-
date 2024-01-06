import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactScreen = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.Txt}>ContactScreen</Text>
    </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    Txt: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
})