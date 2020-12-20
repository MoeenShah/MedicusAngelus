import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { View, TouchableOpacity, Image, StyleSheet, Keyboard } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Colors from '../assets/colors';
import { SearchBar } from 'react-native-elements';

const ParentContainer = styled.SafeAreaView`
  flex-direction: row;
  /* justify-content: space-around; */
  /* align-items: center; */
  width: ${wp(100)};
  background-color: ${Colors.PRIMARY};
  height: ${hp(11)};
`;

const Menu = styled.Image`
  width: 25;
  height: 26;
`;

const DashboardHeader = ({ navigation }) => {
  const [expandSearch, setExpandSearch] = useState(false);

  // const updateSearch = (search) => {
  //   navigation.navigate(CONSTANTS.SCREENS.SEARCH_PRODUCT);
  // };

  return (
    <ParentContainer>
      <View style={{ width: wp(70), justifyContent: 'center', alignItems: 'center' }}>

      </View>
      {/* <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          // navigation.navigate(CONSTANTS.SCREENS.SEARCH_PRODUCT);
        }}>
        <View style={styles.parent_view}>
          <SearchBar
            editable={false}
            placeholder="Search Products"
            style={{ fontSize: 12 }}
            // textColor={Colors.PRIMARY_DARK}
            // tintColor={Colors.WHITE}
            // textFieldBackgroundColor={Colors.WHITE}
            // barTintColor={Colors.PRIMARY_DARK}
            style={styles.search}
          />
        </View>
      </TouchableOpacity> */}
    </ParentContainer >
  );
};

const styles = StyleSheet.create({
  search: {
    width: wp(75),
    marginLeft: 7,
    height: hp(4),
  },
  parent_view: {
    backgroundColor: Colors.WHITE,
    width: wp(82),
    padding: 5,
    height: hp(5),
    borderRadius: 20,
  },
  container: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  myButton: {
    padding: 5,
    marginRight: 12,
    height: hp(8.5),
    width: hp(8.5), //The Width must be the same as the height
    borderRadius: 140, //Then Make the Border Radius twice the size of width or Height
    backgroundColor: Colors.SECONDARY,
  },
  image: {
    height: hp(3),
    width: wp(12),
    alignSelf: 'center',
    // alignContent: 'center',
    // marginTop: hp(1.8),
    resizeMode: 'contain',
  },
});

export default DashboardHeader;
