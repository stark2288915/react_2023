import {baseUrl} from "../constants/baseUrl";
const getUsers = () => baseUrl.get('/users');

export {getUsers};