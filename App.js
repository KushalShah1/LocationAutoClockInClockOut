import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import LoginScreen from './screens/LoginScreen';

const getFonts = () => Font.loadAsync({
  'ProximaNova-Regular': require('./fonts/ProximaNova-Regular.otf'),
  'Arciform-Regular':require('./fonts/Arciform.otf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
     <LoginScreen />
    );
  }

  else{
    return(
      <AppLoading
      startAsync={getFonts}
      onFinish={()=>setFontsLoaded(true)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});