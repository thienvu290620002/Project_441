import React from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './style';

const Login = () => {
  return (
    <View>
        <Image style={styles.imgLogin1} source={require('./images/logo1.jpg')} />
        <Text style={[styles.textLogin, {marginBottom: 20}]}>Morning begins with Thức Coffee</Text>
        <View>
        <TouchableOpacity style={styles.btnLogin} onPress={() => { /* Handle button press */ }}>
          <Text style={styles.btnText}>Login With Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnLogin, { backgroundColor: 'blue' }]} onPress={() => { /* Handle button press */ }}>
            <Text style={styles.btnText}>Login With Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnLogin, {backgroundColor:'#ada8a8'}]} onPress={() => { /* Handle button press */ }}>
          <Text style={[styles.btnText,{color: '#04764e'}]}>Login With Google</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Login
