import axios from 'axios';

const URI = process.env.REACT_APP_BACKEND;

export const login = (email, password) => {
  return axios.post(URI + 'users/login', {
    email: email,
    password: password,
  });
};

export const logout = xAuth => {
  return axios.delete(URI + 'users/logout', {
    headers: { 'x-auth': xAuth },
  });
};

export const authenticateToken = xAuth => {
  return axios.get(URI + 'users/me', {
    headers: { 'x-auth': xAuth },
  });
};
