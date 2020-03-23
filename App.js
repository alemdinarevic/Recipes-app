import React, {useState} from 'react';
import { enableScreens } from 'react-native-screens';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';


import MealsNavigator from './navigation/MealsNavigator';

import mealsReducer from './store/reducers/meals';

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
});
const store = createStore(rootReducer);

const fetchFonts = () => {
  Font.loadASync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
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
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

