import axios from '../setup/axios';

const loginUser = (valueLogin, password) => {
    return axios.post('/api/v1/login', { valueLogin, password });
}

const getUserAccount = () => {
    return axios.get('/api/v1/account');
};

const logoutUser = () => {
    return axios.post('/api/v1/logout');
}

export { loginUser, getUserAccount, logoutUser };