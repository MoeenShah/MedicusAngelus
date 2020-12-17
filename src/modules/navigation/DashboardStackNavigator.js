import React from 'react';
import {Image, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation-stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Colors from '../../assets/colors';
import HomeScreen from '../../HomeScreen';
import BankAccountScreen from '../../BankAccountScreen';
import EditInfoScreen from '../../EditInfoScreen';
import SettingsScreen from '../../SettingsScreen';

import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';

const TabBarComponent = (props) => <BottomTabBar {...props} />;

const DashboardStackNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        headerTransparent: false,
        headerShown: false,
        // header: <DashboardHeader navigation={navigation} />,
      }),
    },
    BankAccountScreen: {
      screen: BankAccountScreen,
      navigationOptions: ({navigation}) => ({
        headerTransparent: false,
        headerShown: false,
        // header: <DashboardHeader navigation={navigation} />,
      }),
    },
    EditInfoScreen: {
      screen: EditInfoScreen,
      navigationOptions: ({navigation}) => ({
        headerTransparent: false,
        headerShown: false,
        // header: <DashboardHeader navigation={navigation} />,
      }),
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: ({navigation}) => ({
        headerTransparent: false,
        headerShown: false,
        // header: <DashboardHeader navigation={navigation} />,
      }),
    },
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'screen',
    mode: 'card',
    gestureEnabled: true,
    defaultNavigationOptions: {
      cardOverlayEnabled: true,
      // headerLeftContainerStyle: {borderWidth: 1, borderColor: 'red'},
      headerStyle: {
        backgroundColor: Colors.SECONDARY,
      },
      // headerTintColor: Colors.PRIMARY,
      // headerTransparent: true,
      // headerTitle: (props) => (
      //   <View>
      //     <Text>Dashboard</Text>
      //   </View>
      // ),
    },
  },
);
// const DrawerNav = createDrawerNavigator(
//   {
//     BusinessDashboard: BusinessDashboard,
//   },
//   {
//     drawerPosition: 'right',
//   },
// );
export default DashboardStackNavigator;
