import { combineReducers } from 'redux';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  getUsersRequest,
  getUsersSuccess,
  getUserSuccess,
  getUserRequest,
  getUsersTodosSuccess,
  getUsersTodosRequest,
} from './usersAction';

const users = createReducer<Array<[]>>([], {
  [getUsersSuccess.type]: (_, { payload }: PayloadAction<Array<[]>>) => [...payload],
});

const isLoadingUsers = createReducer(false, {
  [getUsersRequest.type]: () => true,
  [getUsersSuccess.type]: () => false,
});

const isLoadingUser = createReducer(false, {
  [getUserRequest.type]: () => true,
  [getUserSuccess.type]: () => false,
});

const isLoadingUserTodos = createReducer(false, {
  [getUsersTodosRequest.type]: () => true,
  [getUsersTodosSuccess.type]: () => false,
});

export default combineReducers({ users, isLoadingUsers, isLoadingUser, isLoadingUserTodos });
