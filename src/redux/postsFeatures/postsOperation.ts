import axios from 'axios';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getPosts = () => axios.get('/posts');

export const getPost = (id: number) => axios.get(`/posts/${id}`);

export const getPostComments = (id: number) => axios.get(`/posts/${id}/comments`);
