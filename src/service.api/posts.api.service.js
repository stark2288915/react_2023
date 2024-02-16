import {baseUrl} from "../constants/base.ursl";


const getUserPosts = (userId) => baseUrl.get(`posts/${userId}`);

export {getUserPosts};