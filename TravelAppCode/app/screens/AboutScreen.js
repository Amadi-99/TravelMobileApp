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

const AboutScreen = () => {
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
            style={{color: 'black', fontSize: 22, fontFamily: 'Roboto-Medium'}}>
            Travel Sri Lanka
          </Text>
        </View>
      </ImageBackground>
      <ScrollView>
        <View>
          <View style={{paddingVertical: 35, paddingHorizontal: 35}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                  color: 'black',
                }}>
                OUR VISION
              </Text>
            </View>
          </View>
          <View style={{paddingVertical: 15, paddingHorizontal: 35}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                  textAlign: 'center',
                }}>
                To improve our service and productivity in order to be the most
                popular service provider in the field of tourism in Sri Lanka.
              </Text>
            </View>
          </View>
          <View style={{paddingVertical: 15, paddingHorizontal: 35}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                  color: 'black',
                }}>
                OUR MISSION
              </Text>
            </View>
          </View>
          <View style={{paddingVertical: 15, paddingHorizontal: 35}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                  textAlign: 'center',
                }}>
                Travels is to provide inbound and outbound scheduled and
                customised tour packages for our valuable and diverse customers.
                Each client will be taken care of by our loyal and efficient
                staff during the tour. Our service will be a service like no
                other to prove our theme ‘’Travel with Trust’’.
              </Text>
            </View>
          </View>
          <View style={{paddingVertical: 15, paddingHorizontal: 35}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                  color: COLORS.blue,
                }}>
                CONTACT DETAILS
              </Text>
            </View>
          </View>
          <View style={{paddingVertical: 15, paddingHorizontal: 35}}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                  color: COLORS.blue,
                }}>
                Mobile : +94 (0) 766293799
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                  color: COLORS.blue,
                }}>
                Phone : +94 (0) 524303322
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                  color: COLORS.blue,
                }}>
                Email : info@asytourssl.com
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                  color: COLORS.blue,
                }}>
                Address : Colombo, Sri Lanka
              </Text>
            </View>
          </View>
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

export default AboutScreen;
