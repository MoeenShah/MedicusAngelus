import React from 'react';
import {Image, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import DashboardHeader from '../../component/DashboardHeader';

import * as Colors from '../../assets/colors';
import HomeScreen from '../../HomeScreen';
import DashboardDrawerNavigator from './DashboardDrawerNavigator';
import LoginScreen from '../../LoginScreen';
import SignupScreen from '../../SignupScreen';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HeadingText = styled.Text`
  color: ${Colors.WHITE};
  font-size: ${wp(5)};

  text-align: center;
  /* margin-bottom: ${hp(4)}; */
`;

const OpenStackNavigator = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: ({navigation}) => ({
        headerTransparent: true,
        // header: <DashboardHeader navigation={navigation} />,
      }),
    },
    SignupScreen: {
      screen: SignupScreen,
      navigationOptions: ({navigation}) => ({
        headerTransparent: true,
        headerShown: false,
        // header: <DashboardHeader navigation={navigation} />,
      }),
    },
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'screen',
    // headerMode: 'float',
    mode: 'card',
    defaultNavigationOptions: {
      cardOverlayEnabled: true,
      // gesturesEnabled: true,
      // headerTitle: (props) => (
      //   <View>
      //     <Text>Esdhhs</Text>
      //     {/* <Image
      //       style={{
      //         width: 100,
      //         height: 22,
      //       }}
      //       source={require('@images/Bookryt.png')}
      //     /> */}
      //   </View>
      // ),
    },
  },
);

export default OpenStackNavigator;
