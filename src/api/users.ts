import axios from 'axios'

export const getUserstRequests = async () => await axios.get('https://jsonplaceholder.typicode.com/users')
export const getAlbumRequest = async (id: number) => await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`) 
