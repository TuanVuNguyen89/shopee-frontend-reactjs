import axios from '../setup/axios';
import _ from 'lodash'

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

const createProduct = (data, mainImage) => {
    let _data = _.cloneDeep(data);

    // Add mainImage to _product
    _data = { ..._data, mainImage };
    _data = { ..._data, categoryId: 1 }
    console.log("this is product", _data);
    return axios.post('/api/v1/product/create', { _data });
}

export { readProductInfo, readProductInfoWithType, readProductInfoWithId, readImageInfoWithId, createProduct };