import axios from 'axios';
import { Dispatch } from 'redux';
import { IPostOne } from '../../modules/InterfacePosts';
import {
  getPostsRequest,
  getPostSuccess,
  getPostError,
  getPostRequest,
  getCommentsSuccess,
  getCommentsError,
  getCommentsRequest,
  getPostsSuccess,
} from './postsAction';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getPosts = (setState: any) => async (dispatch: Dispatch<{ type: string }>) => {
  dispatch(getPostsRequest());
  try {
    const { data } = await axios.get<any>(`/posts`);

    dispatch(getPostsSuccess(data));
    setState(data);
  } catch (error) {
    dispatch(getPostError((error as Error).message));
  }
};

export const getPost =
  (id: string | undefined, setPost: any) => async (dispatch: Dispatch<{ type: string }>) => {
    dispatch(getPostRequest());

    try {
      const { data } = await axios.get<IPostOne>(`/posts/${id}`);

      dispatch(getPostSuccess(data));
      setPost(data);
    } catch (error) {
      dispatch(getPostError((error as Error).message));
    }
  };

export const getPostComments =
  (id: any, setComment: any) => async (dispatch: Dispatch<{ type: string }>) => {
    dispatch(getCommentsRequest());

    try {
      const { data } = await axios.get(`/posts/${id}/comments`);

      dispatch(getCommentsSuccess(data));
      setComment(data);
    } catch (error) {
      dispatch(getCommentsError((error as Error).message));
    }
  };
