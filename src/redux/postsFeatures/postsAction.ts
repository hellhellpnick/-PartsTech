import { createAction } from '@reduxjs/toolkit';

const getPostsRequest = createAction('posts/getPostsRequest');
const getPostsSuccess = createAction('posts/getPostsSuccess', (date) => ({
  payload: date,
}));
const getPostsError = createAction('posts/getPostsError', (date) => ({
  payload: date,
}));

export { getPostsRequest, getPostsSuccess, getPostsError };
