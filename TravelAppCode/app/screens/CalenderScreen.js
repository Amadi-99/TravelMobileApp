import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../components/colors';

const CalenderScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
      }}>
      <StatusBar translucent={false} backgroundColor={COLORS.main} />
      <ImageBackground style={style.header}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../assets/images/AppLogo.png')}
            style={{
              height: 100,
              width: 100,
              marginBottom: 10,
            }}
          />
          <Text
            style={{color: 'black', fontSize: 24, fontFamily: 'Roboto-Medium'}}>
            Travel Sri Lanka
          </Text>
        </View>
      </ImageBackground>
      <ScrollView>
        <View
          style={{
            paddingVertical: 35,
            paddingHorizontal: 35,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: COLORS.main,
              fontSize: 20,
              fontFamily: 'Roboto-Italic',
            }}>
            Custom Calender
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CalenderScreen;
