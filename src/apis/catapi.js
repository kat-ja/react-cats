import axios from 'axios';
import KEY from '../config/keys';

//const KEY = '3bc41554-fb49-41c3-b5f6-857e3c617098';

const catApi = axios.create({
    baseURL:'https://api.thecatapi.com/v1'
})

catApi.defaults.headers.common['x-api-key'] = KEY;

export default catApi;