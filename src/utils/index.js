import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "@/App";
import PianKu from "@/components/PianKu";
import TopNews from "@/components/TopNews";



Vue.use(VueRouter)



const routes = [
    {
        path: '/',
        name: '大概框架',
        component: App,
        redirect:"/home",
        children:[
            {path: 'home',name: '主页',component:App},
            {path: 'movie',name: '片库',component:PianKu},
            {path: 'top',name: '排行榜',component:TopNews},
        ]
    },
    // {
    //     path: '/about',
    //     name: 'about',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // },
    // {
    //     path: '/login',
    //     name: '登录',
    //     component:Login
    // },
    // {
    //     path: '/register',
    //     name: '注册',
    //     component:Register
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// router.beforeEach((to, from, next) =>{
//     console.log(to)
//     next(vm => {
//         vm.$bus.$emit("getPathName",to.name)
//     });
//
// })


export default router