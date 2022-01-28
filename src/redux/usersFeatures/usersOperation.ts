import axios from 'axios';
import { Dispatch } from 'redux';
import { IPostOne } from '../../modules/InterfacePosts';
import {
  getUsersRequest,
  getUsersSuccess,
  getUserSuccess,
  getUserError,
  getUserRequest,
  getUsersTodosSuccess,
  getUsersTodosError,
  getUsersTodosRequest,
} from './usersAction';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getUsers = (setState: any) => async (dispatch: Dispatch<{ type: string }>) => {
  dispatch(getUsersRequest());
  try {
    const { data } = await axios.get<any>(`/users`);

    dispatch(getUsersSuccess(data));
    setState(data);
  } catch (error) {
    dispatch(getUserError((error as Error).message));
  }
};

export const getUser =
  (id: string | undefined, setState: any) => async (dispatch: Dispatch<{ type: string }>) => {
    dispatch(getUserRequest());

    try {
      const { data } = await axios.get<IPostOne>(`/users/${id}`);

      dispatch(getUserSuccess(data));
      setState(data);
    } catch (error) {
      dispatch(getUserError((error as Error).message));
    }
  };

export const getUserTodos =
  (id: any, setState: any) => async (dispatch: Dispatch<{ type: string }>) => {
    dispatch(getUsersTodosRequest());

    try {
      const { data } = await axios.get(`/albums/${id}/photos`);

      dispatch(getUsersTodosSuccess(data));
      setState(data);
    } catch (error) {
      dispatch(getUsersTodosError((error as Error).message));
    }
  };
