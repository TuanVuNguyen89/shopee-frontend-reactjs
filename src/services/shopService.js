import axios from '../setup/axios';

const readShopInfo = () => {
    return axios.get('/api/v1/shop/read');
}
const fetchAllUsers = (page, limit) => {
    return axios.get(`/api/v1/user/show?page=${page}&limit=${limit}`);
}

export { readShopInfo, fetchAllUsers};