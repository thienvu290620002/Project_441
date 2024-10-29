import React from 'react'
import { Button, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
const Started = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.imgLogin} source={require('./images/logo.jpg')} />
        <Text style={styles.textLogin}>Let's meet out summer</Text>
        <Text style={styles.textLogin}>coffee drinks</Text>
        <Text style={styles.textLoginSmall}>Wake up your dreams with a cup of coffee</Text>
        <TouchableOpacity style={styles.btnLogin} onPress={() => { /* Handle button press */ }}>
          <Text style={styles.btnText}>GET STARTED</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Started
