// 路由器模块

import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../Views/About.vue'
import Home from '../Views/Home.vue'
import News from '../Views/News.vue'
import Message from '../Views/Message.vue'
import MessageDetail from '../Views/MessageDetail.vue'

Vue.use(VueRouter)

//最终这个模块要向外暴露路由器对象
export default new VueRouter({
    //n个路由
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    // path:'/news',  //path最左侧的永远代表根路径，这种写法不对
                    path:'/home/news',
                    component:News  
                },
                {
                    path:'/home/message',
                    component:Message ,
                    children:[
                        {
                            path:'/home/message/messagedetail/:id',   //:id是占位
                            component:MessageDetail
                        }
                    ] 
                },
                {
                    path:'',   //home
                    redirect:'/home/news'
                }
            ]
        },
        {  //重定向请求about
            path:'/',
            redirect:'/about'
        }
    ]
})