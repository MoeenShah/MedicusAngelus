import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions ,
  Button,
  TouchableOpacity,
  
  Platform,
  
  ScrollView,
  Switch,
  StatusBar,
  ToastAndroid,} from 'react-native';
  import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

import BackgroundHeader from './component/BackgroundHeader';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View style={s.header}>
      <View style={s.headerBody}>
        {/* <Entypo name="chevron-left" size={32} color="#fff" /> */}
        <Text style={s.headerText}>Bank Wallet</Text>
      </View>
    </View>
  );
};

const BankAccountScreen = (props) => {
  const [useLiteCreditCardInput, setuseLiteCreditCardInput] = useState(false);
  _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
  _onFocus = (field) => console.log("focusing", field);
  _setUseLiteCreditCardInput = (useLiteCreditCardInput) => setuseLiteCreditCardInput({ useLiteCreditCardInput });
  return (
    <View style={s.container}>
            <BackgroundHeader style={s.bg} />
      <Header />
        <Switch
          style={s.switch}
          onValueChange={_setUseLiteCreditCardInput}
          value={useLiteCreditCardInput} />

        {useLiteCreditCardInput ?
          (
            <LiteCreditCardInput
              autoFocus
              inputStyle={s.input}

              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={_onFocus}
              onChange={_onChange} />
          ) : (
            <CreditCardInput
              autoFocus

              requiresName
              requiresCVC
              requiresPostalCode

              labelStyle={s.label}
              inputStyle={s.input}
              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={_onFocus}
              onChange={_onChange} />
          )
        }
      </View>
    // <View style={styles.container}>

    //   <Animatable.View animation="fadeInUpBig" style={styles.footer}>
    //     <ScrollView>
    //       <Text style={styles.text_footer}>Card Number</Text>
    //       <View style={styles.action}>
    //         <FontAwesome name="user-o" color="#05375a" size={20} />
    //         <TextInput
    //           placeholder="Your Card Number here!"
    //           style={styles.textInput}
    //           autoCapitalize="none"
              // onChangeText={(val) => nameTextInputChange(val)}
            // />
            /* {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null} */
          // </View>

          // <Text style={styles.text_footer}>Expiry Date</Text>
          // <View style={styles.action}>
          //   <FontAwesome name="user-email" color="#05375a" size={20} />
          //   <TextInput
          //     placeholder="Your card expiry date here!"
          //     style={styles.textInput}
          //     autoCapitalize="none"
              // onChangeText={(val) => textInputChange(val)}
            // />
            /* {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null} */
          // </View>
          // <Text
          //   style={[
          //     styles.text_footer,
          //     {
          //       marginTop: 35,
          //     },
          //   ]}>
          //   CVC Number
          // </Text>
          // <View style={styles.action}>
          //   <Feather name="lock" color="#05375a" size={20} />
          //   <TextInput
          //     placeholder="Your card CVC number here!"
          //     // secureTextEntry={data.secureTextEntry ? true : false}
          //     style={styles.textInput}
          //     autoCapitalize="none"
              // onChangeText={(val) => handlePasswordChange(val)}
            // />
            /* <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity> */
          // </View>

         


          /* <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Privacy policy
            </Text>
          </View> */
          /* <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {
                if (data.password !== data.confirm_password) {
                  ToastAndroid.show(
                    'Password and Confirm Password are not same.',
                    ToastAndroid.SHORT,
                  );
                } else {
                  props
                    .signup({
                      name: data.name,
                      email: data.email,
                      password: data.password,
                    })
                    .then((res) => {
                      navigation.navigate('App');
                    })
                    .catch((err) => {});
                }
              }}
              >
              <LinearGradient
                colors={['#356383', '#2E86C1']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Apply
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View> */
      //   </ScrollView>
      // </Animatable.View>
      
      /* <Text style={styles.text}>Edit Info Screen</Text> */
    // </View>
  );
};

export default BankAccountScreen;
const s = StyleSheet.create({
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#F5F5F5",
    marginTop: 0,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
  header: {
    marginTop: 0,
    padding: 15,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  bg: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 250,
  },
  headerBody: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
// const styles = StyleSheet.create({
  
  
//   headerRightContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {marginLeft: 12, transform: [{rotate: '-90deg'}]},
  
//   rating: {
//     flexDirection: 'row',
//     marginTop: 5,
//   },
//   tag: {
//     color: '#2E86C1',
//   },
//   cardContainer: {
//     padding: 15,
//     paddingBottom: 0,
//   },
//   margin: {
//     height: 1,
//     backgroundColor: '#F0F1F2',
//     width: '100%',
//     marginVertical: 10,
//   },
//   cardBodyBottom: {
//     marginTop: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 5,
//   },
//   cardBottomTitle: {
//     fontSize: 14,
//     marginTop: 5,
//   },
//   cardGroupIcon: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   iconMore: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//   },
//   iconLike: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//   },
//   cardBody: {
//     padding: 15,
//     backgroundColor: '#fff',
//     marginTop: 15,
//     marginBottom: 15,
//     borderRadius: 35,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   cardBodyTop: {
//     flexDirection: 'row',
//   },
//   cardLeftSide: {
//     paddingHorizontal: 10,
//     flex: 1,
//   },
//   cardName: {
//     color: '#2E86C1',
//     fontSize: 25,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   cardTime: {
//     color: '#2E86C1',
//     fontSize: 16,
//     fontWeight: '500',
//     marginTop: 5,
//   },
//   cardAddress: {
//     color: 'gray',
//     fontSize: 15,
//     fontWeight: '500',
//     marginTop: 5,
//   },
//   cardAvatar: {
//     marginLeft: Dimensions.get('window').width / 3.1,
//     // marginRight:Dimensions.get('window').height,
//     height: 100,
//     width: 100,
//     backgroundColor: 'gray',
//     borderRadius: 35,
//   },
//   cardHeaderContaner: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   cardHeading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   cardMore: {
//     fontWeight: 'bold',
//     color: '#2E86C1',
//   },
//   faceGroup: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   faceContainer: {
//     backgroundColor: '#fff',
//     padding: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderRadius: 20,
//     marginHorizontal: 20,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     marginTop: 20,
//   },
//   faceText: {
//     fontSize: 16,
//     marginTop: 6,
//   },

//   container: {
//     flex: 1,
//   },
//   headerContainer: {
//     padding: 20,
//     paddingHorizontal: 30,
//     marginTop: 52,
//   },
//   heading: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   desc: {
//     fontSize: 20,
//     fontWeight: '400',
//     color: '#fff',
//     marginTop: 5,
//   },
//   buttonBooks: {
//     flexDirection: 'row',
//     marginTop: 20,
//   },
//   btnGradient: {
//     padding: 10,
//     borderRadius: 40,
//   },
//   btnBookText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   trademark: {
//     textAlign: 'center',
//   },
// });
