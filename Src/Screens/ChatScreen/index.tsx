import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChartScreen = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.Txt}>ChartScreen</Text>
    </View>
  )
}

export default ChartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    Txt: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
})