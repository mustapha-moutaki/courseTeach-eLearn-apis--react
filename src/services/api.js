// importing axios library to our project
import axios from 'axios';

const api = axios.create({
    // this is the base url 
    baseURL:"http:127.0.0.1:8000/api",
})

export default api;