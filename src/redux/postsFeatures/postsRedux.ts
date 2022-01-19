import { combineReducers } from 'redux';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import {
  getPostsSuccess,
  getPostsRequest,
  getPostSuccess,
  getPostRequest,
  getPostError,
  getCommentsSuccess,
  getCommentsRequest,
  getCommentsError,
} from './postsAction';
import { IPostOne } from '../../modules/InterfacePosts';

const posts = createReducer<Array<[]>>([], {
  [getPostsSuccess.type]: (state, { payload }: PayloadAction<Array<[]>>) => [...payload],
});

const activePost = createReducer({} as IPostOne, {
  [getPostSuccess.type]: (_: IPostOne, { payload }: PayloadAction<IPostOne>) => ({
    ...payload,
  }),
});

const activePostError = createReducer<string>('', {
  [getPostError.type]: (_: string, { payload }: PayloadAction<string>) => payload,
});

const activeCommentPost = createReducer<Array<[]>>([], {
  [getCommentsSuccess.type]: (state, { payload }: PayloadAction<Array<[]>>) => [...payload],
});

const activeCommentPostError = createReducer<string>('', {
  [getCommentsError.type]: (_: string, { payload }: PayloadAction<string>) => payload,
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
  activePost,
  activePostError,
  activeCommentPost,
  activeCommentPostError,
  isLoadingPost,
  isLoadingComments,
  isLoadingPosts,
});
