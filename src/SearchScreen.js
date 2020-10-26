import React from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MapView, {Marker} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
import {CardHome} from './HomeScreen';
const Header = () => {
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
          <TextInput style={styles.inputText} value="" 
          placeholder="Name"/>
        </View>
        <View style={styles.wrapperInput}>
          <FontAwesome5 name="briefcase-medical" size={18} color="gray" />
          <TextInput
            style={[styles.inputText, {color: '#2E86C1'}]}
            value=""
            placeholder="Category"
          />
          
        </View>
      </View>
    </View>
  );
};

const Map = () => {
  return (
    <View>
      <MapView
        style={styles.mapview}
        initialRegion={{
          latitude: 33.651718,
          longitude: 73.156777,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: 33.651718,
            longitude: 73.156777,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <View
            style={{
              backgroundColor: '#2E86C1',
              padding: 5,
              borderRadius: 40,
            }}>
            <View
              style={{
                backgroundColor: '#356383',
                padding: 5,
                borderRadius: 20,

                shadowColor: '#714B87',
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 1,
                shadowRadius: 20,
              }}>
              <LinearGradient
                style={styles.marker}
                colors={['#2E86C1', '#2E86C1', '#2E86C1']}>
                <FontAwesome5 name="user-alt" color="#fff" />
              </LinearGradient>
            </View>
          </View>
        </Marker>
      </MapView>
    </View>
  );
};

const ListCard = () => {
  return (
    <View>
      <CardHome
        noHeader
        // noFooter
        // book
        info={{
          name: 'Search Result 1',
          time: 'Sunday, May 15th at 8:00 PM',
          address: 'Search Address 1',
          detail: 'Search Detail 1',
          islike: true,
          rating: 4,
          tag: 'Heart Specialist',
        }}
      />
      <CardHome
        noHeader
        // noFooter
        // book
        info={{
          name: 'Search Result 2',
          time: 'Sunday, May 15th at 8:00 PM',
          address: 'Search Address 2',
          detail: 'Search Detail 2',
          islike: false,
          rating: 4,
          tag: 'ENT',
        }}
      />
    </View>
  );
};

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Map />
      <ListCard />
    </View>
  );
};

export default SearchScreen;

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
