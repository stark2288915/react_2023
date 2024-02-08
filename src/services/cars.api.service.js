import axios from "axios";

const axiosJsPlasHolder = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})


const getCars = (car) => {
    return axiosJsPlasHolder.get('/cars')
}
const postCar = (car) => {
    return axiosJsPlasHolder.post('/cars', {data:car})
}
const postCars = (comment) => {
    return axiosJsPlasHolder.delete('/cars/', {data:comment})
}


export {postCar, postCars, getCars};