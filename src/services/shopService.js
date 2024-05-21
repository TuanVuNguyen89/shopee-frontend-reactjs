import axios from '../setup/axios';

const readShopInfo = () => {
    return axios.get('/api/v1/shop/read');
}

export { readShopInfo };