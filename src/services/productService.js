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

const createProduct = (data) => {
    let _data = _.cloneDeep(data);

    // Add mainImage to _product
    _data = { ..._data, categoryId: 1 }
    //console.log("this is product", _data);
    return axios.post('/api/v1/product/create', { _data });
}

const editProduct = (data) => {
    return axios.put('/api/v1/product/edit', { data });
}

const deleteProduct = (id) => {
    //console.log(id);
    return axios.delete(`/api/v1/product/delete/${id}`);
}

export {
    readProductInfo, readProductInfoWithType, readProductInfoWithId,
    readImageInfoWithId, createProduct, editProduct, deleteProduct
};