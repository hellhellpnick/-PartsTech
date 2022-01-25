import { combineReducers } from 'redux';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  getPostsSuccess,
  getPostsRequest,
  getPostSuccess,
  getPostRequest,
  getCommentsSuccess,
  getCommentsRequest,
} from './postsAction';

const posts = createReducer<Array<[]>>([], {
  [getPostsSuccess.type]: (state, { payload }: PayloadAction<Array<[]>>) => [...payload],
});

const isLoadingPosts = createReducer(false, {
  [getPostsRequest.type]: () => true,
  [getPostsSuccess.type]: () => false,
});

const isLoadingPost = createReducer(false, {
  [getPostRequest.type]: () => true,
  [getPostSuccess.type]: () => false,
});

const isLoadingComments = createReducer(false, {
  [getCommentsRequest.type]: () => true,
  [getCommentsSuccess.type]: () => false,
});

export default combineReducers({
  posts,
  isLoadingPost,
  isLoadingComments,
  isLoadingPosts,
});
