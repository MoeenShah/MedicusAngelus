//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Linking , Dimensions, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
const onPressSetting = () =>   ToastAndroid.show("Settings!", ToastAndroid.SHORT);
const onPressBank = () =>   ToastAndroid.show("Bank!", ToastAndroid.SHORT);
const onPressEdit = () =>   ToastAndroid.show("Edit!", ToastAndroid.SHORT);
const Header = () => {
  return (
    <View style={styles.header}>
      
      <View style={styles.headerBody}>
      {/* <Entypo name="chevron-left" size={32} color="#fff" /> */}
        <Text style={styles.headerText}>Profile</Text>
      </View>
    </View>
  );
};
export const CardHome = ({title, info, noHeader, noFooter, book}) => {
    return (
      <View style={styles.cardContainer}>

        {!noHeader && (
          <View style={styles.cardHeaderContaner}>
            <Text style={styles.cardHeading}>{title}</Text>
            <Text style={styles.cardMore}>See All</Text>
          </View>
        )}
        <View style={styles.cardBody}>
        <Image
              style={styles.cardAvatar}
              source={{
                uri:
                  'https://image.freepik.com/free-vector/medical-mask-illustration_23-2148477564.jpg',
              }}
            />
          <View style={styles.cardBodyTop}>
            
            <View style={styles.cardLeftSide}>
              <Text style={styles.tag}>{info.tag}</Text>
              <Text style={styles.cardName}>{info.name}</Text>
              <Text style={styles.cardTime}>{info.time}</Text>
              <Text style={styles.cardAddress}>{info.address}</Text>
              <Text style={styles.cardAddress}>{info.detail}</Text>
              {info.rating && <Rating rating={info.rating} />}
            </View>
          </View>
          {!noFooter && <View style={styles.margin} />}
  
          {!noFooter && (
            <View style={styles.cardBodyBottom}>
              <TouchableOpacity onPress={onPressBank}>
              <View style={styles.cardGroupIcon}>
                <AntDesign name="bank" size={32} />
                <Text style={styles.cardBottomTitle}>Bank Account</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressEdit}>
              <View style={styles.cardGroupIcon}>
                <AntDesign name="edit" size={32} />
                <Text style={styles.cardBottomTitle}>Edit Info</Text>
              </View>
              </TouchableOpacity>
              {/* <View style={styles.cardGroupIcon}>
                <AntDesign name="calendar" size={32} />
                <Text style={styles.cardBottomTitle}>Appointments</Text>
              </View> */}
              <TouchableOpacity onPress={onPressSetting}>
              <View style={styles.cardGroupIcon}>
                <MaterialIcons name="settings" size={32} />
                <Text style={styles.cardBottomTitle}>Settings</Text>
              </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };
class ProfileScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
                <Header />
                <CardHome
          title=""
          info={{
            name: 'Syed M. Moeen Shah',
            time: '',
            address: '',
            detail: '',
          }}
        />
        <Text style={styles.trademark}>Medicus Angelus by Syed M Moeen Shah.</Text>
        </View>
      );
    }
  }


export default ProfileScreen;
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
        justifyContent: 'center',
        alignItems: 'center',
      },
    rating: {
      flexDirection: 'row',
      marginTop: 5,
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
      padding:5
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
      marginBottom:15,
      borderRadius: 35,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5
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
      fontSize: 25,
      fontWeight: 'bold',
      marginLeft: Dimensions.get('window').width / 10,
      marginRight: Dimensions.get('window').width / 15,
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
    marginLeft: Dimensions.get('window').width / 3.5,
        // marginRight:Dimensions.get('window').height,
      height: 100,
      width: 100,
      backgroundColor: 'gray',
      borderRadius: 35,

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
    btnGradient: {
      padding: 10,
      borderRadius: 40,
    },
    btnBookText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#fff',
    },
    trademark:{
    textAlign:'center'
    }
  });
  