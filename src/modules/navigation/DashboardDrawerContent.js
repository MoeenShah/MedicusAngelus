import {DrawerItems} from 'react-navigation-drawer';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import * as Colors from '../../assets/colors';
import AsyncStorage from '@react-native-community/async-storage';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import {connect} from 'react-redux';

const DepartmentButton = styled.TouchableOpacity`
  border-color: ${Colors.PRIMARY};
  justify-content: center;
  height: ${hp(3)};
  /* margin-left: 12; */
`;
const Button = styled.TouchableOpacity`
  border-color: ${Colors.PRIMARY};
  justify-content: center;
  height: ${hp(4.5)};
`;
const HomeButton = styled.TouchableOpacity`
  border-color: ${Colors.PRIMARY};
  height: ${hp(5.5)};
  display: flex;
  /* background-color: ${(props) =>
    props.selectedButton === 'home' ? Colors.SELECTION : Colors.WHITE}; */
  justify-content: flex-start;
  align-items: center;
  padding-left: 12;

  padding-right: 12;
  flex-direction: row;
`;
const SettingsButton = styled.TouchableOpacity`
  border-color: ${Colors.PRIMARY};
  justify-content: center;
  height: ${hp(5.5)};
  /* background-color: ${(props) =>
    props.selectedButton === 'settings' ? Colors.SELECTION : Colors.WHITE}; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 12;
  padding-right: 12;
  flex-direction: row;
`;
const SignoutButton = styled.TouchableOpacity`
  border-color: ${Colors.PRIMARY};
  justify-content: center;
  height: ${hp(5.5)};
  /* background-color: ${(props) =>
    props.selectedButton === 'signout' ? Colors.SELECTION : Colors.WHITE}; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 12;
  padding-right: 12;
  flex-direction: row;
`;
const DrawerHeader = styled.View`
  padding: 20px 20px 20px 20px;
  flex-direction: row;
  /* box-shadow: 5px 5px 5px grey;
  elevation: 5; */
  justify-content: flex-start;
  align-items: center;
  height: ${hp(10)};
  /* background-color: ${Colors.PRIMARY}; */
  margin-bottom: ${hp(1)};
`;
const ImageView = styled.View`
  width: 50px;
`;
const NameText = styled.Text`
  font-size: 21;
  text-align: center;
  padding-left: 15px;
  color: ${Colors.SECONDARY_TEXT};
  text-transform: capitalize;
`;
const DashboardDrawerContent = ({userType, user, ...props}) => {
  const [selectedButton, setSelectedButton] = useState('home');
  const [token, setToken] = useState('');
  useEffect(() => {
    (async () => {
      setSelectedButton('home');
      const token = await AsyncStorage.getItem('token');
      setToken(token);
      // const fcmToken = firebase.messaging().getToken();
      // fcmToken.then((res) => {
      //   setGoogleToken(res);
      // });
    })();
  }, []);

  return (
    <View style={{backgroundColor: Colors.SECONDARY}}>
      <SafeAreaView
        style={styles.container}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <Text>Anything u want add here</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(97),
    // flex: 1,
    // borderWidth: 1,
  },
  image: {
    height: hp(5),
    width: wp(5),
    tintColor: Colors.WHITE,
  },
  drawerHeader: {
    height: 100,
    backgroundColor: Colors.WHITE,
  },
  buttonText: {
    fontSize: 20,

    textAlign: 'left',
    color: Colors.BLACK,
    textTransform: 'capitalize',
  },
  modalbuttonText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
    color: Colors.SECONDARY_TEXT,
  },
  departmentButtonText: {
    fontSize: 11,
    textAlign: 'left',
    marginLeft: 12,
    color: Colors.PRIMARY,
    textTransform: 'uppercase',
  },
  drawerImage: {
    height: hp(9),
    width: wp(10),
    // marginLeft: wp(5),
    // alignSelf: 'center',
    // borderRadius: 70,
  },
  logoutImage: {
    height: 16,
    width: 16,
    // marginLeft: wp(35),
    // borderRadius: 70,
  },
  settingsImage: {
    height: 16,
    width: 16,
    // marginLeft: wp(35),
    // borderRadius: 70,
  },
  NameText: {
    // fontSize: hp(2.5),
    fontSize: 17,
    textAlign: 'left',
    // borderWidth: 1,
    width: wp(40),
    overflow: 'hidden',
    // marginTop: 4,
    color: Colors.WHITE,
  },
});
// export default DashboardDrawerContent;
const mapStateToProps = ({common}) => ({
  userType: common.userType,
  // data: business.data,
  // password: customer.data.password,
  // contact: customer.data.contact,
});

const mapDispatchToProps = (dispatch) => ({
  // logout: (email, googleToken) => dispatch(logout(email, googleToken)),
  // setCustomBookings: (id, departmentName) =>
  //   dispatch(setCustomBookings(id, departmentName)),
  // setCustomDepartmentName: () => dispatch(setCustomDepartmentName()),
  // setCustomerContact: number => dispatch(setCustomerContact(number)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardDrawerContent);
