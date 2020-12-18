//import liraries
import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {CardHome} from './HomeScreenContent';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {getAppointments, deleteAppointment} from './actions/common';

const URL =
  'https://moeenvideo.herokuapp.com/b4af6a80-8d7f-4bbe-8ea1-df3fae0f83dc';

const onPress = () => {
  Linking.openURL(URL).catch((err) => {
    console.error('An error occurred', err);
  });
};

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

const ListCard = ({appointmentsData, self, ...props}) => {
  return (
    <View>
      {appointmentsData &&
        appointmentsData.length > 0 &&
        appointmentsData.map((appointment, index) => {
          console.log(appointment);
          return (
            <View>
              <CardHome
                noHeader
                noFooter
                info={{
                  name: `Appointment with: Dr. ${
                    appointment.doctor && appointment.doctor.name
                  }`,
                  time: `${appointment.detail}`,
                  address: `Email: ${appointment.doctor.email}`,
                  detail: `Detail: ${appointment.doctor.phone} `,
                  // detail: `Detail: ${appointment.doctor.phone} `,
                  tag: appointment.doctor && appointment.doctor.domain,
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
              <TouchableOpacity
                onPress={() => {
                  console.log(appointment);
                  self
                    .deleteAppointment(appointment._id)
                    .then((res) => {
                      self.getAppointments();
                    })
                    .catch((err) => console.log(err));
                }}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.btnGradientDelete}
                  colors={['#a20a0a', '#f05454']}>
                  <Text style={styles.btnBookText}>Delete Appointment</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          );
        })}
    </View>
  );
};

// create a component

const AppointmentScreen = ({appointmentsData, loading, ...props}) => {
  useEffect(() => {
    props
      .getAppointments()
      .then((res) => {})
      .catch((err) => console.log(err));
  }, []);
  console.log(appointmentsData, 'ssdasdasd');
  return (
    <View style={styles.container}>
      <Header />
      <ListCard appointmentsData={appointmentsData} self={props} />
    </View>
  );
};

const mapStateToProps = ({common}) => {
  return {
    appointmentsData: common.appointmentsData,
    loading: common.loading,
    // userData: common.userData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAppointments: () => dispatch(getAppointments()),
  deleteAppointment: (id) => dispatch(deleteAppointment(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentScreen);

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
    height: Dimensions.get('window').height,
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
    marginTop: 0,
    elevation: 8,
  },
  btnGradientDelete: {
    padding: 10,
    borderRadius: 40,
    marginLeft: 15,
    marginRight: 15,
    elevation: 8,
  },
  btnBookText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

//make this component available to the app
