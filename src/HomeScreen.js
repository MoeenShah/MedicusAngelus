import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {connect} from 'react-redux';
import {getUserByToken} from './actions/common';
import BackgroundHeader from './component/BackgroundHeader';
import BottomTab from '../src/component/BottomTab';
import SearchScreen from './SearchScreen';
import EmergencyScreen from './EmergencyScreen';
import HomeScreenContent from './HomeScreenContent';
import AppointmentScreen from './AppointmentScreen';
import ProfileScreen from './ProfileScreen';


const HomeScreen = ({userData, ...props}) => {
  const [tab, setTab] = useState(0);
  useEffect(() => {
    props
      .getUserByToken()
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <BackgroundHeader style={styles.bg} />
      <ScrollView style={styles.scrollView}>
        {tab == 0 && <HomeScreenContent navigation={props.navigation} />}
        {tab == 1 && <SearchScreen navigation={props.navigation} />}
        {tab == 2 && <EmergencyScreen navigation={props.navigation} />}
        {tab == 3 && <AppointmentScreen navigation={props.navigation} />}
        {tab == 4 && <ProfileScreen navigation={props.navigation} />}
      </ScrollView>
      <BottomTab selected={tab} onSelected={(index) => setTab(index)} />
    </View>
  );
};

const mapStateToProps = ({common}) => {
  return {
    userData: common.userData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUserByToken: (data) => dispatch(getUserByToken(data)),
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

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
