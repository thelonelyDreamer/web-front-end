import axios from 'axios'


const client = axios.create({
    baseURL: 'http://localhost:12345'
})


export default client;