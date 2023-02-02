import Vue from 'vue'
import VueRouter from 'vue-router'
import PianKu from "@/components/PianKu";
import TopNews from "@/components/TopNews";
import Manage from "@/components/Manage";
import Home from "@/components/Home";
import Alist from "@/Alist.vue";



Vue.use(VueRouter)



const routes = [
    {
        path: '/',
        name: '大概框架',
        component: Manage,
        redirect:"/home",
        children:[
            {path: 'home',name: '主页',component:Home},
            {path: 'movie',name: '片库',component:PianKu},
            {path: 'top',name: '排行榜',component:TopNews},
            {path: 'alist',name: '流媒体播放器',component:Alist},
        ]
    },
    // {path: 'aside',name: '导航',component:Aside},
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
let head = document.getElementsByTagName('head');let meta = document.createElement('meta');meta.name = 'referrer';//根据实际情况修改referrer的值，可选值参考上文
meta.content = 'no-referrer';head[0].appendChild(meta);


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