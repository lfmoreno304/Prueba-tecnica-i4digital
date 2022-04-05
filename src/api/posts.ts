import axios from 'axios'

export const getPostsRequests = async () => await axios.get('https://jsonplaceholder.typicode.com/posts')