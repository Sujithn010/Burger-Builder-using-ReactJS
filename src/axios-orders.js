import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://[react-url].firebaseio.com/'
});

export default instance;
