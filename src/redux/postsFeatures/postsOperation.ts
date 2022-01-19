import axios from 'axios';
import { Dispatch } from 'redux';
import { IPostOne } from '../../modules/InterfacePosts';
import {
  getPostSuccess,
  getPostError,
  getPostRequest,
  getCommentsSuccess,
  getCommentsError,
  getCommentsRequest,
} from './postsAction';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getPosts = () => axios.get('/posts');

export const getPost = (id: Number) => async (dispatch: Dispatch<{ type: string }>) => {
  dispatch(getPostRequest());

  try {
    const { data } = await axios.get<IPostOne>(`/posts/${id}`);

    dispatch(getPostSuccess(data));
  } catch (error) {
    dispatch(getPostError((error as Error).message));
  }
};

export const getPostComments = (id: Number) => async (dispatch: Dispatch<{ type: string }>) => {
  dispatch(getCommentsRequest());

  try {
    const { data } = await axios.get(`/posts/${id}/comments`);

    dispatch(getCommentsSuccess(data));
  } catch (error) {
    dispatch(getCommentsError((error as Error).message));
  }
};
