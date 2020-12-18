import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MapView, {Marker} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
import {CardHome} from './HomeScreenContent';
import {connect} from 'react-redux';
import {searchDoctor} from './actions/common';

const SearchHeader = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    props
      .searchDoctor({query: ''})
      .then((res) => {})
      .catch((err) => console.log(err.message));
  }, []);

  const handleChange = (value) => {
    setSearchQuery(value);
    props
      .searchDoctor({query: value})
      .then((res) => {})
      .catch((err) => console.log(err.message));
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerBody}>
        {/* <Entypo name="chevron-left" size={32} color="#fff" /> */}
        <Text style={styles.headerText}>Search</Text>
        <View style={styles.headerRightContainer}>
          <Entypo name="map" size={25} color="#fff" />
          <Octicons
            name="settings"
            size={25}
            color="#fff"
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.groupInputs}>
        <View style={styles.wrapperInput}>
          <AntDesign name="search1" size={18} color="gray" />
          <TextInput
            style={styles.inputText}
            value={searchQuery}
            onChangeText={(e) => {
              handleChange(e);
            }}
            placeholder="Search Doctor"
          />
        </View>
        {/* <View style={styles.wrapperInput}>
          <FontAwesome5 name="briefcase-medical" size={18} color="gray" />
          <TextInput
            style={[styles.inputText, {color: '#2E86C1'}]}
            value=""
            placeholder="Category"
          />
        </View> */}
      </View>
    </View>
  );
};

const mapStateToProps = ({common}) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  searchDoctor: (data) => dispatch(searchDoctor(data)),
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);

const styles = StyleSheet.create({
  header: {
    marginTop: 0,
    padding: 15,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {marginLeft: 12, transform: [{rotate: '-90deg'}]},
  headerBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    // padding: 15,
  },
  wrapperInput: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
    elevation: 5
  },
  inputText: {
    padding: 10,
    flex: 1,
  },
  mapview: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  marker: {
    backgroundColor: '#2E86C1',
    padding: 10,

    borderRadius: 20,
  },
});
