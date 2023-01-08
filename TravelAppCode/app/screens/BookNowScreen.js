import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Icon,
} from 'react-native';
import COLORS from '../components/colors';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const BookNowScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [place, setPlace] = useState();
  const [name, setName] = useState();
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/AppLogo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Travel Sri Lanka</Text>
      <FormInput
        labelValue={name}
        onChangeText={userName => setName(userName)}
        placeholderText="Name"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        iconType="mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={place}
        onChangeText={userPlace => setPlace(userPlace)}
        placeholderText="Place"
        iconType="enviromento"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormButton
        buttonTitle="Book Now"
        onPress={() => alert('Book is done Succesfully')}
      />
    </View>
  );
};

export default BookNowScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
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
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
