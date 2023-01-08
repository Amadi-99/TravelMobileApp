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

const GuideScreen = () => {
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
            Travel and Tourism Guide
          </Text>
        </View>
        <View>
          <View style={{paddingVertical: 15, paddingHorizontal: 35}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                }}>
                When to travel?
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
                }}>
                It is between mid-December and mid-March that the island reaches
                its peak of the "western" tourist season. Many Europeans then
                travelled to Sri Lanka, particularly on the west and south
                coasts, to escape winter and spend the Christmas and New Year
                holidays in the sun.From June to September, the east coast
                enjoys a drier climate and it is the best time to go on a Sri
                Lanka seaside holiday. Two festivals also attract a large
                population of Sri Lankan islanders and expatriates: the Sinhala
                and Tamil New Year in April and the Esala Perahera festival in
                July and August. The latter concerns more particularly Kandy
                (central mountains) and Kataragama (south-eastern coast). It
                therefore becomes more expensive to travel to Sri Lanka due to
                soaring prices.
              </Text>
            </View>
          </View>
          <View style={{paddingVertical: 15, paddingHorizontal: 35}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                }}>
                Weather forecast
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
                }}>
                Sri Lanka's climate is tropical with successive wet and dry
                seasons but with two monsoon regimes. From June to October, the
                large southwest monsoon waters the western coasts of the
                country, but also the mountainous centre of the island. From
                December to March, the small monsoon rages in northern and
                eastern Sri Lanka, but it is quite insignificant or even absent
                in some years. The dry season runs from March to June with
                temperatures around 35°C on average.
              </Text>
            </View>
          </View>
          <View style={{paddingVertical: 15, paddingHorizontal: 35}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                }}>
                Health
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
                }}>
                Dengue fever and malaria, transmitted by mosquitoes in some
                areas, are two diseases that are prevalent in Sri Lanka. Dengue
                fever is very prevalent, especially in Colombo province and the
                north. Malaria is present all year round except in the districts
                of Colombo, Galle, Gampaha, Kalutara, Matara and Nuwara Eliya.
                In addition to having your traditional vaccinations up to date,
                it is also advisable to be vaccinated against hepatitis A and B,
                or even typhoid fever depending on the type of travel planned in
                Sri Lanka.
              </Text>
            </View>
          </View>
          <View style={{paddingVertical: 15, paddingHorizontal: 35}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                }}>
                Budget
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
                }}>
                Sri Lanka remains an affordable destination, although prices
                have risen considerably in recent years. The hotel categories
                generally correspond to international standards. You pay in Sri
                Lankan rupees and you can change easily in the city. Avoid
                carrying too much cash with you because of theft, pay by credit
                card instead, especially since it is accepted almost everywhere.
                Tips are systematic but vary according to the service.
              </Text>
            </View>
          </View>
          <View style={{paddingVertical: 15, paddingHorizontal: 35}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Roboto-Medium',
                  marginLeft: 5,
                }}>
                Formalities
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
                }}>
                An electronic visa (ETA) is required to travel to Sri Lanka. The
                request can be made directly by the applicant on the website of
                the Department of Immigration and Emigration. The ETA holder
                shall be allowed to enter Sri Lanka within three months from the
                date of issue of the authorisation. It is advisable to keep a
                copy of the ETA approval with you so that you can present it to
                Sri Lanka in the event of a dispute. This tourist visa is valid
                for 30 days.
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

export default GuideScreen;
