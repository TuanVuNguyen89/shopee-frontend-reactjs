import axios from '../setup/axios';

const loginUser = (valueLogin, password) => {
    return axios.post('/api/v1/login', { valueLogin, password });
}

const getUserAccount = () => {
    return axios.get('/api/v1/account');
};

export { loginUser, getUserAccount };