//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Linking , Dimensions, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {CardHome} from './HomeScreen';
import LinearGradient from 'react-native-linear-gradient';
const URL = "https://moeenvideo.herokuapp.com/b4af6a80-8d7f-4bbe-8ea1-df3fae0f83dc"
const onPress = () =>   Linking.openURL(URL).catch((err) => console.error('An error occurred', err));

const Header = () => {
  return (
    <View style={styles.header}>
      {/* <Entypo name="chevron-left" size={32} color="#fff" /> */}
      <View style={styles.headerBody}>
      {/* <Entypo name="chevron-left" size={32} color="#fff" /> */}
        <Text style={styles.headerText}>Appointment</Text>
      </View>
    </View>
  );
};

const ListCard = () => {
    return (
      <View>
        <CardHome
          noHeader
          noFooter
          info={{
            name: 'Appointment 1',
            time: 'Sunday, May 15th at 8:00 PM',
            address: 'Address 1',
            detail: 'Detail 1',
            
            
            tag: 'Heart Specialist',
          }}
        />
                        <TouchableOpacity onPress={onPress}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.btnGradient}
                    colors={['#356383', '#2E86C1']}>
                    <Text style={styles.btnBookText}>Start Appointment</Text>
                  </LinearGradient>
                </TouchableOpacity>
        <CardHome
          noHeader
          noFooter
          info={{
            name: 'Appointment 2',
            time: 'Sunday, May 15th at 8:00 PM',
            address: 'Address 2',
            detail: 'Detail 2',
            
            
            tag: 'ENT',
          }}

        />
                  <TouchableOpacity onPress={onPress}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.btnGradient}
            colors={['#356383', '#2E86C1']}>
            <Text style={styles.btnBookText}>Start Appointment</Text>
          </LinearGradient>
        </TouchableOpacity>


        <CardHome
          noHeader
          noFooter
          info={{
            name: 'Appointment 3',
            time: 'Sunday, May 15th at 8:00 PM',
            address: 'Address 3',
            detail: 'Detail 3',
            tag: 'ENT',
          }}

        />
        <TouchableOpacity onPress={onPress}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.btnGradient}
            colors={['#356383', '#2E86C1']}>
            <Text style={styles.btnBookText}>Start Appointment</Text>
          </LinearGradient>
        </TouchableOpacity>


        <CardHome
          noHeader
          noFooter
          info={{
            name: 'Appointment 4',
            time: 'Sunday, May 15th at 8:00 PM',
            address: 'Address 4',
            detail: 'Detail 4',
            tag: 'ENT',
          }}

        />
        <TouchableOpacity onPress={onPress}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.btnGradient}
            colors={['#356383', '#2E86C1']}>
            <Text style={styles.btnBookText}>Start Appointment</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };

// create a component

class AppointmentScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
              <Header />
              <ListCard/>
      </View>
    );}

}



// define your styles
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
    btnGradient: {
        padding: 10,
        borderRadius: 40,
        marginLeft: 15,
        marginRight: 15,
        marginTop: -10,
        elevation: 8
      },
      btnBookText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
      },
  });

//make this component available to the app
export default AppointmentScreen;