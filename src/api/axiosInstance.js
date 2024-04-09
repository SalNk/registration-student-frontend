import axios from 'axios';

const HTTP_BASE_URL = "http://192.168.1.79:5000"

const baseURL = `${HTTP_BASE_URL}/api/`;

const axiosInstance = axios.create({
  baseURL,
  timeout: 180000000,
  'Access-Control-Allow-Origin': '*',
  allow_origin: ['*'],
  allow_headers: ['Origin', 'Accept', 'Content-Type', 'X-CSRFToken'],
  /*  allow_methods: ['POST', 'GET', 'DELETE', 'PUT', 'OPTIONS'], */
  withCredentials: false,
  headers: {
    Authorization: localStorage.getItem('access_token')
      ? `Bearer ${localStorage.getItem('access_token')}`
      : null,
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

axiosInstance.interceptors.response.use((response) => {
  // console.log(
  //   response.request.responseURL,
  //   baseURL,
  //   response.request.responseURL.includes(baseURL)
  // );
  if (response.request.responseURL.includes(baseURL)) {
    // console.log('----------SUPERVISOR-----------', response);
    const { data } = response;
    if (data.token) {
      localStorage.setItem('access_token', data.token.access);
      localStorage.setItem('refresh_token', data.token.refresh);
      axiosInstance.defaults.headers.Authorization = `Bearer ${data.token.access}`;
    }
  }
  return response;
});

export default axiosInstance;
export { baseURL };
