import axios from "axios";

/*const getFetchPosts = () => fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json());*/


const axiosPosts = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
})

const getAxiosPosts = () => {
    return axiosPosts.get('/posts')
}

const getPostById = (id) => {
    return axiosPosts.get(`/posts/${id}`);
}

export {axiosPosts, getAxiosPosts, getPostById};

