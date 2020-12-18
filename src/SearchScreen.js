import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MapView, {Marker} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
import {CardHome} from './HomeScreenContent';
import SearchHeader from './SearchHeader';
import {connect} from 'react-redux';
import {searchDoctor} from './actions/common';

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

const ListCard = ({doctorsData, detailsData,  ...props}) => {
  console.log(doctorsData, 'saasasasassa');
  // console.log(detailsData, 'PLEASEEEE');

  return (
    <View>
      {doctorsData &&
        doctorsData.length > 0 &&
        doctorsData.map((doctor) => {
          return (
            <CardHome
              noHeader
              book
              noFooter
              details ={detailsData}
              info={{
                name: `Dr. ${doctor.name}`,
                time: `Contact: ${doctor.phone}`,
                address: `Email: ${doctor.email}`,
                detail: `Type: ${doctor.type}`,
                tag: doctor.domain,
                doctorId: doctor._id,
              }}
            />
          );
        })}
    </View>
  );
};

const SearchScreen = (props) => {
  const [detailQuery, setDetailQuery] = useState("");
  // console.log(detailQuery);
  return (
    <View style={styles.container}>
      <SearchHeader />
      <Map />
      <View style={styles.wrapperInput1}>
      <AntDesign name="infocirlce" size={18} color="gray" />
          <TextInput
            style={styles.inputText1}
            value={detailQuery}
            onChangeText={(value) => {
              setDetailQuery(value);
            }}
            placeholder="Details"
          />
        </View>
      <ListCard doctorsData={props.doctorsData} detailsData={detailQuery} />
    </View>
  );
};

const mapStateToProps = ({common}) => {
  return {
    doctorsData: common.doctorsData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // searchDoctor: (data) => dispatch(searchDoctor(data)),
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);

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
  wrapperInput1: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    elevation: 5
  },
  inputText1: {
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
});
