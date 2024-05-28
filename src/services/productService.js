import axios from '../setup/axios';

const readProductInfo = (page, limit) => {
    return axios.get(`/api/v1/product/read?page=${page}&limit=${limit}`);
}

const readProductInfoWithType = (page, limit, type) => {
    console.log(">>> check page & limit & type", page, limit, type);
    return axios.get(`/api/v1/product/read?page=${page}&limit=${limit}&type=${type}`);
}

export { readProductInfo, readProductInfoWithType };