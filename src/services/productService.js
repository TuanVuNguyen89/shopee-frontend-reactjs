import axios from '../setup/axios';

const readProductInfo = () => {
    return axios.get('/api/v1/product/read');
}

export { readProductInfo };