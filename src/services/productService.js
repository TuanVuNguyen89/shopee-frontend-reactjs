import axios from '../setup/axios';

const readProductInfo = (page, limit) => {
    return axios.get(`/api/v1/product/read?page=${page}&limit=${limit}`);
}

export { readProductInfo };