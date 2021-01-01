import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button,
  TouchableOpacity,
  Device,
  Platform,
  Picker,
  Image,
  ScrollView,
  PermissionsAndroid,
  StatusBar,
  ToastAndroid,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BackgroundHeader from './component/BackgroundHeader';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {set} from 'react-native-reanimated';
const W = Dimensions.get('window').height;

const DataArray = [
  {
    displayName: 'House Number',
    field: 'residentalDetail.houseNumber',
    required: true,
    regex: '',
    type: 'TEXT',
  },
  {
    displayName: 'Street',
    field: 'residentalDetail.street',
    required: true,
    regex: '',
    type: 'TEXT',
  },
  {
    displayName: 'Area',
    field: 'residentalDetail.area',
    required: true,
    regex: '',
    type: 'TEXT',
  },
  {
    displayName: 'City',
    field: 'residentalDetail.city',
    required: true,
    regex: '',
    type: 'TEXT',
    availableValues: {
      Islamabad: [],
      Rawalpindi: [],
      Lahore: [],
      Karachi: [],
    },
  },
  {
    displayName: ' Power Distribution Company',
    field: 'residentalDetail.powerDistributionCompany',
    required: true,
    regex: '',
    type: 'TEXT',
    availableValues: {
      FESCO: [],
      GEPCO: [],
      HESCO: [],
      SEPCO: [],
      IESCO: [],
      KE: [],
      LESCO: [],
      MEPCO: [],
      PESCO: [],
      QESCO: [],
      TESCO: [],
    },
  },
  {
    displayName: '14 digit Bill Reference Number',
    field: 'residentalDetail.billReferenceNumber',
    required: true,
    regex: '',
    type: 'NUMBER',
  },
  {
    displayName: 'Upload Utility Bill Picture (Electricity)',
    field: 'residentalDetail.utilityBillPic',
    required: true,
    regex: '',
    type: 'IMAGE',
  },
];

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerBody}>
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>
    </View>
  );
};

const EditInfoScreen = (props) => {
  const [data, setData] = useState({});
  const [InputChange, setInputChange] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async (type, item) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        // console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        // console.log('base64 -> ', response.base64);
        // console.log('uri -> ', response.uri);
        // console.log('width -> ', response.width);
        // console.log('height -> ', response.height);
        // console.log('fileSize -> ', response.fileSize);
        // console.log('type -> ', response.type);
        // console.log('fileName -> ', response.fileName);
        // setFilePath(response);
        setData({
          ...data,
          [item.field]: response.uri,
          // ...Object.assign((data, {[item.field]: itemValue})),
        });
      });
    }
  };

  const chooseFile = (type, item) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      // console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      // console.log('base64 -> ', response.base64);
      // console.log('uri -> ', response.uri);
      // console.log('width -> ', response.width);
      // console.log('height -> ', response.height);
      // console.log('fileSize -> ', response.fileSize);
      // console.log('type -> ', response.type);
      // console.log('fileName -> ', response.fileName);
      // setFilePath(response);
      setData({
        ...data,
        [item.field]: response.uri,
        // ...Object.assign((data, {[item.field]: itemValue})),
      });
    });
  };

  // const photoUpload = (item) => {
  //   const options = {
  //     title: 'Select Image',
  //     camera: [{name: 'img', title: 'Take a picture'}],
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };

  //   return new Promise((resolve, reject) => {
  //     launchImageLibrary(options, (response) => {
  //       if (response.didCancel) {
  //         reject('User cancelled image picker');
  //       } else if (response.error) {
  //         reject('launchImageLibrary Error: ', response.error);
  //       } else if (response.camera) {
  //         reject('User tapped custom button: ', response.camera);
  //       } else {
  //         console.log(response);
  //         const source = {uri: response.uri};
  //         setData({
  //           ...data,
  //           [item.field]: response.uri,
  //           // ...Object.assign((data, {[item.field]: itemValue})),
  //         });
  //         resolve(source);
  //       }
  //     });
  //   });
  // };

  console.log(data);
  // console.log(data['residentalDetail.utilityBillPic']);

  const TextChange = (key, text) => {
    {
      // setData(Object.assign((data, {[key]: text})));
      if (text.trim().length >= 4) {
        setInputChange(true);
      } else {
        setInputChange(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <BackgroundHeader style={styles.bg} />
      <Header />
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            padding: 5,
            backgroundColor: 'rgba(52, 52, 52, 0.3)',
            borderRadius: 15,
            margin: 7,
          }}>
          {/* <ListForm DataArray={DataArray} dataState={data, setData} /> */}
          <View>
            {DataArray &&
              DataArray.length > 0 &&
              DataArray.map((item, index) => {
                // console.log(item);
                if (item.type == 'IMAGE') {
                  return (
                    <View>
                      <Text style={styles.cardName}>{item.displayName}</Text>
                      {/* <View style={styles.button}>
                        <TouchableOpacity
                          style={styles.upload}
                          onPress={() => photoUpload(item)}>
                          <LinearGradient
                            colors={['#fff', '#fff']}
                            style={styles.upload}>
                            <Text
                              style={[
                                styles.textSign,
                                {
                                  color: '#000000',
                                },
                              ]}>
                              Select Image
                            </Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      </View> */}
                      {/* {(data['residentalDetail.utilityBillPic'] && (
                        <Image
                          style={{
                            width: Dimensions.get('window').width,
                            height: Dimensions.get('window').height / 3,
                            resizeMode: 'contain',
                          }}
                          source={{
                            uri: data['residentalDetail.utilityBillPic'],
                          }}
                        />
                      )) || <Text>No Image Selected</Text>} */}

                      {/* <Image
          source={{
            uri: 'data:image/jpeg;base64,' + filePath.data,
          }}
          style={styles.imageStyle}
        /> */}
                      {(data['residentalDetail.utilityBillPic'] && (
                        <View>
                          <Image
                            source={{
                              uri: data['residentalDetail.utilityBillPic'],
                            }}
                            style={{
                              width: Dimensions.get('window').width,
                              height: Dimensions.get('window').height / 3,
                              resizeMode: 'contain',
                            }}
                          />
                          {/* <Text style={styles.textStyle}>
                            {data['residentalDetail.utilityBillPic']}
                          </Text> */}
                        </View>
                      )) || <Text>No Image Selected</Text>}
                      <View style={styles.button}>
                        <TouchableOpacity
                          style={styles.upload}
                          onPress={() => captureImage('photo', item)}>
                          <LinearGradient
                            colors={['#fff', '#fff']}
                            style={styles.upload}>
                            <Text
                              style={[
                                styles.textSign,
                                {
                                  color: '#000000',
                                },
                              ]}>
                              Launch Camera
                            </Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      </View>
                      {/* <TouchableOpacity
                          activeOpacity={0.5}
                          style={styles.buttonStyle}
                          onPress={() => captureImage('video')}>
                          <Text style={styles.textStyle}>
                            Launch Camera for Video
                          </Text>
                        </TouchableOpacity> */}
                      <View style={styles.button}>
                        <TouchableOpacity
                          style={styles.upload}
                          onPress={() => chooseFile('photo', item)}>
                          <LinearGradient
                            colors={['#fff', '#fff']}
                            style={styles.upload}>
                            <Text
                              style={[
                                styles.textSign,
                                {
                                  color: '#000000',
                                },
                              ]}>
                              Select Image
                            </Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      </View>
                      {/* <TouchableOpacity
                          activeOpacity={0.5}
                          style={styles.buttonStyle}
                          onPress={() => chooseFile('video')}>
                          <Text style={styles.textStyle}>Choose Video</Text>
                        </TouchableOpacity> */}
                    </View>
                  );
                } else if (item.availableValues) {
                  // const key = item.field;
                  return (
                    <View>
                      <Text style={styles.cardName}>{item.displayName}</Text>
                      <Picker
                        selectedValue={selectedValue}
                        style={{height: 50, width: 150}}
                        onValueChange={(itemValue, itemIndex) => {
                          setSelectedValue(itemValue);
                          setData({
                            ...data,
                            // ...Object.assign((data, {[item.field]: itemValue})),
                            [item.field]: itemValue,
                          });
                        }}>
                        {Object.keys(item.availableValues).map((item) => {
                          // console.log('Available values =', item)
                          return (
                            <Picker.Item label={item} value={item} key={item} />
                          );
                        })}
                      </Picker>
                    </View>
                  );
                } else {
                  {
                    // console.log(details)
                    // console.log(info.field1);
                    if (item.type == 'NUMBER') {
                      const key = item.field;
                      return (
                        <View style={styles.cardContainer}>
                          <View style={styles.cardHeaderContaner}>
                            <Text style={styles.cardHeading}>
                              {item.displayName}
                            </Text>
                          </View>
                          <View style={styles.cardBody}>
                            <TextInput
                              style={{height: 40}}
                              placeholder={item.displayName}
                              //  value={value}
                              onChangeText={(text) => {
                                let obj = data;
                                if (text === '') {
                                  delete obj[key];
                                  setData({...obj});
                                } else {
                                  setData({
                                    ...data,
                                    ...Object.assign((data, {[key]: text})),
                                  });
                                }
                              }}
                              keyboardType="number-pad"
                              maxLength={14}
                            />
                            {InputChange ? (
                              <Animatable.View animation="bounceIn">
                                <Feather
                                  name="check-circle"
                                  color="green"
                                  size={20}
                                />
                              </Animatable.View>
                            ) : null}
                            <View style={styles.cardBodyTop}>
                              <View style={styles.cardLeftSide}></View>
                            </View>
                          </View>
                        </View>
                      );
                    } else if (item.type == 'TEXT') {
                      const key = item.field;
                      return (
                        <View style={styles.cardContainer}>
                          <View style={styles.cardHeaderContaner}>
                            <Text style={styles.cardHeading}>
                              {item.displayName}
                            </Text>
                          </View>
                          <View style={styles.cardBody}>
                            <TextInput
                              style={{height: 40}}
                              placeholder={item.displayName}
                              onChangeText={(text) => {
                                let obj = data;
                                if (text === '') {
                                  delete obj[key];
                                  setData({...obj});
                                } else {
                                  setData({
                                    ...data,
                                    ...Object.assign((data, {[key]: text})),
                                  });
                                }
                              }}
                              // onChangeText={(text) => TextChange(key, text)}
                            />
                            {InputChange ? (
                              <Animatable.View animation="bounceIn">
                                <Feather
                                  name="check-circle"
                                  color="green"
                                  size={20}
                                />
                              </Animatable.View>
                            ) : null}
                            <View style={styles.cardBodyTop}>
                              <View style={styles.cardLeftSide}></View>
                            </View>
                          </View>
                        </View>
                      );
                    }
                  }
                }
              })}
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.confirm}
              onPress={() => {
                const filled = Object.keys(data).length;
                if (filled === DataArray.length) {
                  ToastAndroid.show(
                    'All fields are filled!',
                    ToastAndroid.LONG,
                  );
                } else {
                  ToastAndroid.show(
                    `Fields left ${DataArray.length - filled}`,
                    ToastAndroid.LONG,
                  );
                }
              }}>
              <LinearGradient
                colors={['#356383', '#2E86C1']}
                style={styles.confirm}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Edit
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditInfoScreen;

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 250,
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
  FormText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0795f5',
    // marginLeft:10,
  },
  FormText1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    // marginLeft:10
  },
  button: {
    alignItems: 'center',
    // marginTop: 50,
    padding: 10,
  },
  confirm: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  upload: {
    width: '99%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
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
  wrapperInput: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
    elevation: 5,
  },
  inputText: {
    padding: 10,
    flex: 1,
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
    padding: 5,
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
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardBodyTop: {
    flexDirection: 'row',
  },
  cardLeftSide: {
    paddingHorizontal: 10,
    flex: 1,
  },
  cardName: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
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
    marginLeft: Dimensions.get('window').width / 3.1,
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
    fontSize: 20,
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
  trademark: {
    textAlign: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});
