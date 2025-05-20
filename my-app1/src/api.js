import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9004/items', // your Express backend URL
  withCredentials: true,
});

export default api;
