import axios from 'axios';
import { BASE_URL } from './constants';

/**
 * Create an axios instance
 * @function
 * @params {object} baseURL: value
 */
const axiosInstance = axios.create({
  baseURL: BASE_URL
});

export default axiosInstance;
