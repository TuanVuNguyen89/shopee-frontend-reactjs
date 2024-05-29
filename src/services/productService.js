import axios from '../setup/axios';

const readProductInfo = (page, limit) => {
    return axios.get(`/api/v1/product/read?page=${page}&limit=${limit}`);
}

const readProductInfoWithType = (page, limit, type) => {
    //console.log(">>> check page & limit & type", page, limit, type);
    return axios.get(`/api/v1/product/read?page=${page}&limit=${limit}&type=${type}`);
}

const readProductInfoWithId = (id) => {
    //console.log(">>> check id", id);
    return axios.post('/api/v1/product/read', { id });
}

const readImageInfoWithId = (id) => {
    return axios.post('/api/v1/product/image/read', { id });
}

export { readProductInfo, readProductInfoWithType, readProductInfoWithId, readImageInfoWithId };