import axios from "axios";

const baseUrl = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers:{}
})



export {baseUrl};