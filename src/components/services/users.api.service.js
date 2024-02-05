import axios from "axios";

const axiosJsPlasHolder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
})

const getUsers = () => {
    return axiosJsPlasHolder.get('/users/');
}

const getComments = () => {
    return axiosJsPlasHolder.get('/comment/');
}

export {getUsers, getComments};
