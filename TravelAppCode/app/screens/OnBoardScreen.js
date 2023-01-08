import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import COLORS from '../components/colors';

const OnBoardScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/images/onboardImage.jpg')}>
        <View style={style.details}>
          <Text style={style.TopicStyle}>Travel Sri Lanka</Text>
          <Text style={style.TopicStyle1}>Join with us</Text>
          <Text style={style.DetailsStyle}>
            Sri Lanka is an amazing travel destination offering a wide range of
            places to visit. This island, located in the Indian Ocean off the
            coast of India, presents visitors with an incredible array of
            environments to enjoy and experience.
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('LoginScreen')}>
            <View style={style.button}>
              <Text style={style.buttonGetStart}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  details: {
    height: '60%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
  },
  button: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.white,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TopicStyle: {
    color: COLORS.white,
    fontSize: 33,
    fontWeight: 'bold',
  },
  TopicStyle1: {
    color: COLORS.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
  DetailsStyle: {
    color: COLORS.white,
    lineHeight: 25,
    marginTop: 15,
  },
  buttonGetStart: {
    color: COLORS.main,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default OnBoardScreen;
