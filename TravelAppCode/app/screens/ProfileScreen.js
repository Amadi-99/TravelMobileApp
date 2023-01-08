import React from 'react';
import {View, Text, ImageBackground, Image, TextInput} from 'react-native';
import {} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../components/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/ProfileBack.png')}
        style={{padding: 60}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../assets/images/Profile.jpg')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              marginBottom: 10,
            }}
          />
          <Text
            style={{color: '#fff', fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Emlli Jaklin
          </Text>
          <Text
            style={{color: '#fff', fontSize: 16, fontFamily: 'Roboto-Italic'}}>
            Traveller{' '}
          </Text>
        </View>
      </ImageBackground>
      <View style={{paddingVertical: 35, paddingHorizontal: 35}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="location" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Kalkata,India
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="ios-briefcase-sharp" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Traveller
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="mail" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Emlli123@gmail.com
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
