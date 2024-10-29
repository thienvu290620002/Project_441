import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Started from './components/Started'
import Login from './components/Login';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
const App = () => {
  return (
    <ScrollView>
      {/* <Started/> */}
      {/* <Login /> */}
      {/* <SignIn/> */}
      {/* < SignUp /> */}
      <Home />
    </ScrollView>
  );
}

export default App;