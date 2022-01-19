import { createAction } from '@reduxjs/toolkit';

const getPostsRequest = createAction('posts/getPostsRequest');
const getPostsSuccess = createAction('posts/getPostsSuccess', (date) => ({
  payload: date,
}));

const getPostSuccess = createAction('posts/post/getPostSuccess', (date) => ({
  payload: date,
}));
const getPostError = createAction('posts/post/getPostError', (date) => ({
  payload: date,
}));
const getPostRequest = createAction('posts/post/getPostRequest');

const getCommentsSuccess = createAction('posts/post/getCommentsSuccess', (date) => ({
  payload: date,
}));
const getCommentsError = createAction('posts/post/getCommentsError', (date) => ({
  payload: date,
}));
const getCommentsRequest = createAction('posts/post/getCommentsRequest');

export {
  getPostsSuccess,
  getPostSuccess,
  getPostError,
  getPostRequest,
  getCommentsSuccess,
  getCommentsError,
  getCommentsRequest,
  getPostsRequest,
};
