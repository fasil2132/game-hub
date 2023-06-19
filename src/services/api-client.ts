import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '40d7accad6684e40b25b09588824eb6d'
    }
})