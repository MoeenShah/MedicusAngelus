import {CommonActions, Suffixes} from '../actionTypes';
import AsyncStorage from '@react-native-community/async-storage';

const initalState = {
  token: null,
  userData: null,
  loading: false,
  appointmentsData: [],
  doctorsData: [],
};

export default (state = initalState, action) => {
  switch (action.type) {
    case `${CommonActions.SET_USERTYPE}`:
      return {...state, userType: action.usertype};

    case `${CommonActions.LOGIN}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true,
      };
    case `${CommonActions.LOGIN}_${Suffixes.SUCCESS}`:
      AsyncStorage.setItem('token', action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        loading: false,
      };
    case `${CommonActions.LOGIN}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
      };
    case `${CommonActions.SEARCH_DOCTOR}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true,
      };
    case `${CommonActions.SEARCH_DOCTOR}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        doctorsData: action.payload,
        loading: false,
      };
    case `${CommonActions.SEARCH_DOCTOR}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
      };
    case `${CommonActions.SIGNUP}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true,
      };
    case `${CommonActions.SIGNUP}_${Suffixes.SUCCESS}`:
      AsyncStorage.setItem('token', action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        loading: false,
      };
    case `${CommonActions.SIGNUP}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
      };
    case `${CommonActions.GET_USER_BY_TOKEN}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true,
      };
    case `${CommonActions.GET_USER_BY_TOKEN}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        userData: action.payload,
        loading: false,
      };
    case `${CommonActions.GET_USER_BY_TOKEN}_${Suffixes.FAILURE}`:
      return {
        ...state,
        userData: null,
        loading: false,
      };
    case `${CommonActions.GET_APPOINTMENTS}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true,
      };
    case `${CommonActions.GET_APPOINTMENTS}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        appointmentsData: action.payload,
        loading: false,
      };
    case `${CommonActions.GET_APPOINTMENTS}_${Suffixes.FAILURE}`:
      return {
        ...state,
        appointmentsData: [],
        loading: false,
      };
    case `${CommonActions.DELETE_APPOINTMENT}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true,
      };
    case `${CommonActions.DELETE_APPOINTMENT}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        loading: false,
      };
    case `${CommonActions.DELETE_APPOINTMENT}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
