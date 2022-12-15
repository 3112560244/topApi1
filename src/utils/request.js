import axios from 'axios'


const request = axios.create({
    // baseURL:'http://localhost:8082/tools',
    baseURL:'/tools',

    timeout: 5000
})




export default request

