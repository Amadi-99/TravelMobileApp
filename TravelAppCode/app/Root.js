import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from '../app/components/colors';
import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      {/*<AppStack />*/}
      <AuthStack />
    </NavigationContainer>
  );
};

export default Root;
