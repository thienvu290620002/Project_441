import React from 'react'
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './style'
const SignIn = () => {
  return (
    <View>
        <View style={{marginBottom: 40}}>
          <Image style={styles.imgLogin2} source={require('./images/logo1.jpg')} />
          <Text style={{textAlign: 'center', color: 'black',fontWeight: 'bold'}}>THỨC COFFEE</Text>
        </View>
        <View style={{marginLeft: 10,marginRight: 10}}>
            <Text style={{color:'black',fontSize: 20,marginBottom: 20}}>Sign In</Text>
            <View>
              <TextInput
                placeholder='Enter Your Email'
              />
              <TextInput
                placeholder='Enter Your Password'
              />
            </View>
            <TouchableOpacity style={[styles.btnLogin, { width: 300}]} onPress={() => { /* Handle button press */ }}>
              <Text style={styles.btnText}>LOGIN</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',marginTop: 10}}>
              <Text style={{marginRight: 10}}>
                Forgot Password?
              </Text>
              <Text style={{color: '#04764e',textDecorationLine: 'underline',fontSize: 12}}>
                Reset Password
              </Text>
            </View>
            <View style={{marginTop: 80}}>
              <Text style={{textAlign:'center',fontSize:12}}>
                Dont have any account?
              </Text>
              <TouchableOpacity style={[styles.btnLogin, { width: 300,marginTop:5,backgroundColor:'#F6DBB3'}]} onPress={() => { /* Handle button press */ }}>
                <Text style={[styles.btnText,{color:'black',fontWeight:'500'}]}>CREATE AN ACCOUNT</Text>
              </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default SignIn
