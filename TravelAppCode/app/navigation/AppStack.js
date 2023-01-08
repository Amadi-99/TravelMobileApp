import 'react-native-gesture-handler';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../components/colors';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GuideScreen from '../screens/GuideScreen';
import MapScreen from '../screens/MapScreen';
import CalenderScreen from '../screens/CalenderScreen';
import AboutScreen from '../screens/AboutScreen';
import SettingScreen from '../screens/SettingScreen';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.main,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="home-outline" size={22} color={COLORS.main} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="person-outline" size={22} color={COLORS.main} />
          ),
        }}
      />
      <Drawer.Screen
        name="Guide"
        component={GuideScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="book-outline" size={22} color={COLORS.main} />
          ),
        }}
      />
      <Drawer.Screen
        name="Map"
        component={MapScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="location-outline" size={22} color={COLORS.main} />
          ),
        }}
      />
      <Drawer.Screen
        name="Calender"
        component={CalenderScreen}
        options={{
          drawerIcon: () => (
            <Ionicons
              name="ios-calendar-outline"
              size={22}
              color={COLORS.main}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerIcon: () => (
            <Ionicons
              name="information-outline"
              size={22}
              color={COLORS.main}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="settings-outline" size={22} color={COLORS.main} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
