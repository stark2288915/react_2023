import axios from "axios";

const axiosJsPlasHolder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})

const getUsers = () => {
    return axiosJsPlasHolder.get('/users/');
}

const postUsers = (user) => {
    return axiosJsPlasHolder.post('/users/', {data: user})
}


export {getUsers, postUsers};
