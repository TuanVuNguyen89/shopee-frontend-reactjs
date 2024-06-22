import axios from 'axios'

// Set config defaults when creating the instance
const instance = axios.create({
    //baseURL: 'https://shopee-backend-dx56.onrender.com/'
    baseURL: 'https://mualuxstore.com'
});

instance.defaults.withCredentials = true;
//Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("jwt")}`;

// Add a request interceptor
// instance.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const status = error && error.response && error.response.status || 500;
    //console.log(status);

    switch (status) {
        case 401: {
            //toast.error('Unauthorized the user. Please login...');
            //window.location.href = '/login';
            return error.response.data;
        }

        case 403: {
            //toast.error(`you don't have permission to access this resource...`);
            //window.location.href = '/login';
            return error.response.data;
        }

        default: {
            return error.response.data;
        }
    }
    //return Promise.reject(error);
});

export default instance;