import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  PermissionsAndroid,
  ImageBackground,
  StyleSheet,
  Alert,
  Text,
  View,
  Platform,
  BackHandler,
} from 'react-native';
import * as Colors from './assets/colors';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';

const StyledView = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${hp(100)};
`;

const SplashScreen = ({
  getUserByToken,
  setUserType,
  setLanguage,
  loading,
  navigation,
}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        navigation.navigate('App');
      } else {
        navigation.navigate('Auth');
      }
    })();
  }, []);
  return <StyledView>{loading && <ActivityIndicator />}</StyledView>;
};
const styles = StyleSheet.create({
  container: {
    height: hp(98),
    // flex: 1,
    // borderWidth: 1,
  },
  NameText: {
    fontSize: 18,

    textAlign: 'left',
    overflow: 'scroll',

    color: Colors.PRIMARY,
  },
  drawerImage: {
    height: hp(10),
    width: 240,
  },
});

export default SplashScreen;
