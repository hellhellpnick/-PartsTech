import axios from 'axios';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getPosts = () => axios.get('/posts');
