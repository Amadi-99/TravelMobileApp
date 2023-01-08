import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import COLORS from '../components/colors';

const SettingScreen = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Settings</Text>
        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
          <Text style={styles.navButtonText}>Dark Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
          <Text style={styles.navButtonText}>Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
          <Text style={styles.navButtonText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
          <Text style={styles.navButtonText}>Suggestions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
          <Text style={styles.navButtonText}>Advanced</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
          <Text style={styles.navButtonText}>Help</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 30,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 5,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#051d5f',
    fontFamily: 'Lato-Regular',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: COLORS.main,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default SettingScreen;
