import fetch from "node-fetch";


const baseURL = `https://jsonplaceholder.typicode.com`


const post =  (parent, args) => {
    const { id } = args
    return fetch(`${baseURL}/posts/${id}`).then(res => res.json())
};

const posts = () => {
    return fetch(`${baseURL}/posts`).then(res => {
        return res.json()
    })
}

export const postQueryResolvers = {
    post,
    posts
};