import AsyncStorage from '@react-native-community/async-storage';
export const baseUrl = 'http://192.168.100.7:5000/api'; // local

export async function get(url = '') {
  const response = await fetch(`${baseUrl}${url}`, {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': await AsyncStorage.getItem('token'),
    },
  });
  if (response.status === 200) {
    const res = await response.json();
    return res;
  } else if (response.status === 403) {
    const res = await response.json();
    throw new Error(res.msg);
  } else if (response.status === 404) {
    const res = await response.json();
    throw new Error(res.msg);
  } else {
    const res = await response.json();
    throw new Error(res.data.msg);
  }
}

export async function post(url = '', data = {}) {
  const response = await fetch(`${baseUrl}${url}`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': await AsyncStorage.getItem('token'),
    },
    body: JSON.stringify(data),
  });
console.log(baseUrl+url);
  if (response.status === 200) {
    const res = await response.json();
    return res;
  } else if (response.status === 500) {
    const res = await response.json();
    throw new Error(res.msg);
  } else if (response.status === 422) {
    const res = await response.json();
    if (res.msg) {
      throw new Error(res.msg);
    } else {
      throw new Error(res.data.msg);
    }
  } else {
    const res = await response.json();
    if (res.msg) {
      throw new Error(res.msg);
    } else {
      throw new Error(res.data.msg);
    }
  }
}

export async function put(url = '', data = {}) {
  const response = await fetch(`${baseUrl}${url}`, {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': await AsyncStorage.getItem('token'),
    },
    body: JSON.stringify(data),
  });
  if (response.status === 200) {
    const res = await response.json();
    return res;
  } else if (response.status === 403) {
    const res = await response.json();
    throw new Error(res.msg);
  } else {
    const res = await response.json();
    if (res.msg) {
      throw new Error(res.msg);
    } else {
      throw new Error(res.data.msg);
    }
  }
}

export async function deleteRequest(url = '') {
  // Default options are marked with *
  const response = await fetch(`${baseUrl}${url}`, {
    method: 'DELETE',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': await AsyncStorage.getItem('token'),
    },
  });
  return await response.json();
}
