import {CommonActions} from '../actionTypes';
import {post, get, deleteRequest, put} from '../modules/requests';

export const login = (data) => {
  return {
    type: `${CommonActions.LOGIN}`,
    payload: post('/authpatient/', data),
  };
};

export const signup = (data) => {
  return {
    type: `${CommonActions.SIGNUP}`,
    payload: post('/patients/', data),
  };
};
export const searchDoctor = (data) => {
  return {
    type: `${CommonActions.SEARCH_DOCTOR}`,
    payload: post('/doctors/searchdoctor/', data),
  };
};

export const getUserByToken = () => {
  return {
    type: `${CommonActions.GET_USER_BY_TOKEN}`,
    payload: get('/authpatient/'),
  };
};
export const getAppointments = () => {
  return {
    type: `${CommonActions.GET_APPOINTMENTS}`,
    payload: get('/appointments/'),
  };
};
export const deleteAppointment = (id) => {
  return {
    type: `${CommonActions.DELETE_APPOINTMENT}`,
    payload: deleteRequest(`/appointments/${id}`),
  };
};
