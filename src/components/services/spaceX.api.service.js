import axios from "axios";

const axiosSpaceX = axios.create({
    baseURL: 'https://api.spacexdata.com',
    headers: {}
})

const getSpaseXLaunches = () => {
    return axiosSpaceX.get('/v3/launches/');
}

export {axiosSpaceX, getSpaseXLaunches};