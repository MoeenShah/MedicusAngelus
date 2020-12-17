import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  Dimensions,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BottomTab from '../src/component/BottomTab';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Fontisto';
import {connect} from 'react-redux';
import {post, get, deleteRequest, put} from './modules/requests';
import {searchDoctor, getAppointments, getUserByToken} from './actions/common';
import PushNotification from "react-native-push-notification";


PushNotification.createChannel(
  {
    channelId: "channel-id", // (required)
    channelName: "My channel", // (required)
    channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
    soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
    importance: 4, // (optional) default: 4. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  },
  (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);
PushNotification.configure({
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
    },
    onRegistrationError: function(err) {
      console.error(err.message, err);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    // requestPermissions: true,
    requestPermissions: Platform.OS === 'ios'
  });

  testPush = () => {

    // PushNotification.localNotificationSchedule({
    //   //... You can use all the options from localNotifications
    //   message: "My Notification Message", // (required)
    //   date: new Date(Date.now() + 5 * 1000), // in 60 secs
    //   allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
    // });
  }

const URL =
  'https://moeenvideo.herokuapp.com/b4af6a80-8d7f-4bbe-8ea1-df3fae0f83dc';

const Face = ({icon, title, color}) => {
  return (
    <View style={styles.faceGroup}>
      <Icon name={icon} size={36} color={color} />
      <Text style={[styles.faceText, {color}]}>{title}</Text>
    </View>
  );
};
var count = 0;
const onPress = () =>
  Linking.openURL(URL).catch((err) => console.error('An error occurred', err));

  const onPressFace = () =>{
    // PushNotification.localNotification({
    //   channelId: "channel-id", 
    //   title: "Bnak Wallet", // (optional)
    //   message: "You need to verify your credit card!", // (required)
    // });

  ToastAndroid.show(
    'Thank you so much for your feedback, We are continuously improving!',
    ToastAndroid.LONG,
  );
  // testPush();
  }
  const onBankCheck = () =>{
        PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      channelId: "channel-id",
      title:"Bank Wallet",
      priority: "high",
      ignoreInForeground: false,
      message: "Please verify your credit card!", // (required)
      date: new Date(Date.now() + 5 * 1000), // in 60 secs
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
    });
  }

export const CardHome = ({title, info, noHeader, noFooter, book, onPress}) => {
  return (
    <View style={styles.cardContainer}>
      {!noHeader && (
        <View style={styles.cardHeaderContaner}>
          <Text style={styles.cardHeading}>{title}</Text>
          <Text style={styles.cardMore}>See All</Text>
        </View>
      )}
      <View style={styles.cardBody}>
        <View style={styles.cardBodyTop}>
          <Image
            style={styles.cardAvatar}
            source={{
              uri:
                'https://image.freepik.com/free-vector/doctor-clinic-illustration_1270-69.jpg',
            }}
          />
          <View style={styles.cardLeftSide}>
            <Text style={styles.tag}>{info.tag}</Text>
            <Text style={styles.cardName}>{info.name}</Text>
            <Text style={styles.cardTime}>{info.time}</Text>
            <Text style={styles.cardAddress}>{info.address}</Text>
            <Text style={styles.cardAddress}>{info.detail}</Text>
            {info.rating && <Rating rating={info.rating} />}
            <View style={styles.iconMore}>
              {/* <Icon name="angle-right" color="gray" /> */}
            </View>
            {info.islike && (
              <View style={styles.iconLike}>
                <Icon name="heart" color="#E8008D" size={22} />
              </View>
            )}
            {book && (
              <View style={styles.buttonBooks}>
                <TouchableOpacity
                  onPress={() => {
                    post('/appointments', {doctor: info.doctorId}).then((res) =>
                      ToastAndroid.show(
                        'Appointment Booked!',
                        ToastAndroid.LONG,
                      ),
                    );
                  }}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.btnGradient}
                    colors={['#356383', '#2E86C1']}>
                    <Text style={styles.btnBookText}>Book Visit</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        {!noFooter && <View style={styles.margin} />}

        {!noFooter && (
          <View style={styles.cardBodyBottom}>
            <TouchableOpacity onPress={() => {
                    post('/appointments', {doctor: info.doctorId}).then((res) =>
                      ToastAndroid.show(
                        'Appointment Booked!',
                        ToastAndroid.LONG,
                      ),
                    );
                  }}>
            <View style={styles.cardGroupIcon}>
              <AntDesign name="checkcircleo" size={32} />
              <Text style={styles.cardBottomTitle}>Book</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { count+1 }}>
            <View style={styles.cardGroupIcon}>
              <AntDesign name="closecircleo" size={32} />
              <Text style={styles.cardBottomTitle}>Cancel</Text>
            </View>
            </TouchableOpacity>
            <View style={styles.cardGroupIcon}>
              <AntDesign name="calendar" size={32} />
              <Text style={styles.cardBottomTitle}>Calendar</Text>
            </View>
            <View style={styles.cardGroupIcon}>
              <MaterialIcons name="explore" size={32} />
              <Text style={styles.cardBottomTitle}>Directions</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const Rating = ({rating}) => {
  return (
    <TouchableOpacity>
    <View style={styles.rating}>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          if (rating > i) {
            return (
              <AntDesign name="star" color="#2E86C1" style={{marginRight: 5}} />
            );
          }
          return <AntDesign name="staro" style={{marginRight: 5}} />;
        })}
    </View>
    </TouchableOpacity>
  );
};
const HomeScreenContent = ({
  userData,
  appointmentsData,
  doctorsData,
  ...props
}) => {
  useEffect(() => {
    onBankCheck(),
    props
      .searchDoctor({query: ''})
      .then((res) => {})
      .catch((err) => console.log(err.message));
    props
      .getAppointments()
      .then((res) => {})
      .catch((err) => console.log(err.message));
    props
      .getUserByToken()
      .then((res) => {})
      .catch((err) => console.log(err.message));
  }, []);
  

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Hi, {userData && userData.name}</Text>
          <Text style={styles.desc}>How are you feeling ?</Text>
        </View>
        <TouchableOpacity onPress={onPressFace}>
        <View style={styles.faceContainer}>
          <Face icon="laughing" title="Great" color="#2E86C1" />
          <Face icon="slightly-smile" title="Good" color="#2E86C1" />
          <Face icon="neutral" title="Okay" color="#2E86C1" />
          <Face icon="frowning" title="Bad" color="#2E86C1" />
          <Face icon="expressionless" title="Awful" color="#2E86C1" />
        </View>
        </TouchableOpacity>
        <View>
          {appointmentsData[0] && (
            <View>
              <CardHome
                noHeader
                noFooter
                info={{
                  name: `Appointment with: Dr. ${
                    appointmentsData[0] &&
                    appointmentsData[0].doctor &&
                    appointmentsData[0] &&
                    appointmentsData[0].doctor.name
                  }`,
                  time: 'Sunday, May 15th at 8:00 PM',
                  address: `Email: ${
                    appointmentsData[0] && appointmentsData[0].doctor.email
                  }`,
                  detail: `Contact: ${
                    appointmentsData[0] && appointmentsData[0].doctor.phone
                  } `,
                  tag:
                    appointmentsData[0] &&
                    appointmentsData[0].doctor &&
                    appointmentsData[0] &&
                    appointmentsData[0].doctor.domain,
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
          )}
          <CardHome
          // book
            title="Recommended"
            info={{
              name: `Dr. ${doctorsData[count] && doctorsData[count].name}`,
              time: `Contact: ${doctorsData[count] && doctorsData[count].phone}`,
              address: `Email: ${doctorsData[count] && doctorsData[count].email}`,
              detail: `Type: ${doctorsData[count] && doctorsData[count].type}`,
              tag: doctorsData[count] && doctorsData[count].domain,
              islike: false,
              doctorId: doctorsData[count] && doctorsData[count]._id,
              rating: 4,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ({common}) => {
  return {
    userData: common.userData,
    appointmentsData: common.appointmentsData,
    doctorsData: common.doctorsData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAppointments: () => dispatch(getAppointments()),
  searchDoctor: (data) => dispatch(searchDoctor(data)),
  getUserByToken: () => dispatch(getUserByToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContent);

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    marginTop: 5,
  },
  bg: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 250,
  },
  tag: {
    color: '#2E86C1',
  },
  cardContainer: {
    padding: 15,
    paddingBottom: 0,
  },
  margin: {
    height: 1,
    backgroundColor: '#F0F1F2',
    width: '100%',
    marginVertical: 10,
  },
  cardBodyBottom: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardBottomTitle: {
    fontSize: 14,
    marginTop: 5,
  },
  cardGroupIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconMore: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  iconLike: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  cardBody: {
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // elevation: 5
  },
  cardBodyTop: {
    flexDirection: 'row',
  },
  cardLeftSide: {
    paddingHorizontal: 10,
    flex: 1,
  },
  cardName: {
    color: '#2E86C1',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardTime: {
    color: '#2E86C1',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },
  cardAddress: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 5,
  },
  cardAvatar: {
    height: 80,
    width: 80,
    backgroundColor: 'gray',
    borderRadius: 60,
  },
  cardHeaderContaner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardMore: {
    fontWeight: 'bold',
    color: '#2E86C1',
  },
  faceGroup: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceContainer: {
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 20,
    elevation: 5,
  },
  faceText: {
    fontSize: 16,
    marginTop: 6,
  },

  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
    paddingHorizontal: 30,
    marginTop: 52,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  desc: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
    marginTop: 5,
  },
  buttonBooks: {
    flexDirection: 'row',
    marginTop: 20,
  },
  // btnGradient: {
  //   padding: 10,
  //   borderRadius: 40,
  // },
  btnGradient: {
    padding: 10,
    borderRadius: 40,
    marginLeft: 15,
    marginRight: 15,
    marginTop: -10,
    elevation: 8,
  },
  btnBookText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});
