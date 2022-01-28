import { createAction } from '@reduxjs/toolkit';

const getUsersRequest = createAction('users/getUsersRequest');
const getUsersSuccess = createAction('users/getUsersSuccess', (date) => ({
  payload: date,
}));

const getUserSuccess = createAction('users/users/getUserSuccess', (date) => ({
  payload: date,
}));
const getUserError = createAction('users/user/getUserError', (date) => ({
  payload: date,
}));
const getUserRequest = createAction('users/user/getUserRequest');

const getUsersTodosSuccess = createAction('users/user/getUsersTodosSuccess', (date) => ({
  payload: date,
}));
const getUsersTodosError = createAction('users/user/getUsersTodosError', (date) => ({
  payload: date,
}));
const getUsersTodosRequest = createAction('users/user/getUsersTodosRequest');

export {
  getUsersRequest,
  getUsersSuccess,
  getUserSuccess,
  getUserError,
  getUserRequest,
  getUsersTodosSuccess,
  getUsersTodosError,
  getUsersTodosRequest,
};
