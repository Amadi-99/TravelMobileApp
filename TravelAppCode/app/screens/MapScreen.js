import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../components/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MapScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
      }}>
      <StatusBar translucent={false} backgroundColor={COLORS.main} />
      <ImageBackground style={style.header}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 24,
                fontFamily: 'Roboto-Medium',
              }}>
              Find the Place
            </Text>
          </View>
          <View style={style.inputContainer}>
            <Icon name="search" size={28} />
            <TextInput
              placeholder="Search place"
              style={{color: COLORS.grey}}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 70,
    paddingHorizontal: 30,
    flexDirection: 'row',
    backgroundColor: COLORS.main,
  },
  inputContainer: {
    marginHorizontal: 25,
    height: 55,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
});

export default MapScreen;
