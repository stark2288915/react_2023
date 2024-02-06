import axios from "axios";

const axiosJsPlasHolder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})

const getComments = () => {
    return axiosJsPlasHolder.get('/comments/');
}

const postComments = (comment) => {
    return axiosJsPlasHolder.post('/comments/', {data:comment})
}

export {getComments, postComments};