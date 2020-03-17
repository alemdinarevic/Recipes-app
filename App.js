import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MealsNavigator from './navigation/MealsNavigator';

const fetchFonts = () => {
  Font.loadASync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {

  [fontsLoaded, setFontsLoaded] = useState(false);

  if(!fontsLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish = {() => {setFontsLoaded(true)}}
        onError = {(err) => {console.log(err)}}
      />
    );
  }


  return (
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
