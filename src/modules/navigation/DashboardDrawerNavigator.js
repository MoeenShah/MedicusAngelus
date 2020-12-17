import React from 'react';
import {connect} from 'react-redux';
import {Image, Text, View} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DashboardStackNavigator from './DashboardStackNavigator';
import DashboardDrawerContent from './DashboardDrawerContent';

const DashboardDrawerNavigator = createDrawerNavigator(
  {
    DashboardStackNavigator: {
      screen: DashboardStackNavigator,
      navigationOptions: () => ({
        drawerLabel: 'Home',
        gestureEnabled: false,
        swipeEnabled: false,
      }),
    },
    // Settings: {
    //   screen: Settings,
    //   navigationOptions: () => ({
    //     drawerLabel: 'Settings',
    //   }),
    // },
  },
  {
    initialRouteName: 'DashboardStackNavigator',
    drawerLockMode: 'locked-closed',
    swipeEnabled: false,
    drawerPosition: 'left',
    backBehavior: 'order',
    drawerType: 'front',
    drawerWidth: wp(70),
    contentComponent: DashboardDrawerContent,
  },
);

export default DashboardDrawerNavigator;
