import axios from 'axios'


const request = axios.create({
    // baseURL:'http://localhost:8082/tools',
    baseURL:'/tools',
    timeout: 5000,
})

// request.interceptors.request.use(config => {
//     // config.headers['Content-Type'] = 'application/json;charset=utf-8';
//
//     // let user = localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null;
//     // if(user){
//     //     config.headers['token'] = user.token;  // 设置请求头
//     // }
//
//     config.headers['Referer'] = ''
//     return config
// }, error => {
//     return Promise.reject(error)
// });


export default request

