import axios from 'axios'

let baseURL= 'http://localhost:8888/'
const instance = axios.create({
  baseURL,
  timeout: 7000,
  headers: {}
});


// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});



// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  let res=null
  if(response.status===200){
    if(response.data&&response.data.code===0){
      res=response.data.data
    }
  }
  return res;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default instance