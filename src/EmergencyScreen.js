import React from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, ToastAndroid} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MapView, {Marker} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
const onPressEmergency = () => ToastAndroid.show("Emergency!", ToastAndroid.SHORT);
const Header = () => {
  return (
    <View style={styles.header}>
      
      <View style={styles.headerBody}>
      {/* <Entypo name="chevron-left" size={32} color="#fff" /> */}
        <Text style={styles.headerText}>Emergency</Text>
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
            // onPress = {onPressEmergency}
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

const EmergencyScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Map />
    </View>
  );
};

export default EmergencyScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: 0,
    padding: 10,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },

  icon: {marginLeft: 12, transform: [{rotate: '-90deg'}]},
  headerBody: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    
  },
  mapview: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },
  marker: {
    backgroundColor: '#2E86C1',
    padding: 10,

    borderRadius: 20,
  },
});
