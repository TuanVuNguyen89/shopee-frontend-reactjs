import axios from '../setup/axios';

const TestUploadImage = () => {
    return axios.get('/api/v1/test');
}

const UploadImage = (data) => {
    return axios.post('/api/v1/test', { productId: data.productId, image: data.image })
}

export { TestUploadImage, UploadImage };