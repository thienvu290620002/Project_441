import React from 'react'
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './style'
const SignUp = () => {
  return (
    <View>
        <View style={{marginBottom: 40}}>
          <Image style={styles.imgLogin2} source={require('./images/logo1.jpg')} />
          <Text style={{textAlign: 'center', color: 'black',fontWeight: 'bold'}}>THỨC COFFEE</Text>
        </View>
        <View style={{marginLeft: 10,marginRight: 10}}>
            <Text style={{color:'black',fontSize: 20,marginBottom: 20}}>Sign Up</Text>
            <View>
              <TextInput
                placeholder='Enter Your Email'
              />
              <TextInput
                placeholder='Enter Your Password'
              />
              <TextInput
                placeholder='Confirm Your Password'
              />
            </View>
            <TouchableOpacity style={[styles.btnLogin, { width: 300,marginTop: 70}]} onPress={() => { /* Handle button press */ }}>
              <Text style={styles.btnText}>CREATE AN ACCOUNT</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',marginTop: 10,justifyContent:'center'}}>
              <Text style={{fontSize:12}}>
                By tapping Sign up you accept all our
              </Text>
              <Text style={{color: '#04764e',textDecorationLine: 'underline',fontSize: 12,marginLeft:4,marginRight: 4}}>
                terms
              </Text>
              <Text style={{fontSize:12}}>
                and
              </Text>
              <Text style={{color: '#04764e',textDecorationLine: 'underline', fontSize: 12,marginLeft: 4}}>
                condition
              </Text>
            </View>
        </View>
    </View>
  )
}

export default SignUp
