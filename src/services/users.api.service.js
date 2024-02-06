import axios from "axios";

const axiosJsPlasHolder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-type': 'application/json; charset=UTF-8'},
})

const getUsers = () => {
    return axiosJsPlasHolder.get('/users/');
}

const postUsers = (data) => {
    return axiosJsPlasHolder.post('/users/', {data: data})
}




const getComments = () => {
    return axiosJsPlasHolder.get('/comments/');
}



export {getUsers, getComments, postUsers};
