import Home from '@/views/home'
import About from '@/views/About'
import Info from '@/views/Info'
import Reduxstore from '@/views/Reduxstore'
import Errorpage from '@/views/error'
import Login from '@/views/login'
import TinymceComponent from '@/views/component/Tinymce'


const routeConfig = {}

routeConfig.other = [{
    path: '/login',
    component: Login,
    name: '第一个路由',
}]


routeConfig.manin = [{
        path: '/',
        component: Info,
        name: '第一个路由',
    },
    {
        path: '/home',
        component: Home,
        name: '第一个路由',
    },
    {
        path: '/info',
        component: Info,
        name: '第一个路由',
    },
    {
        path: '/about',
        component: About,
        name: '第一个路由',
    },
    {
        path: '/redux',
        component: Reduxstore,
        name: '第一个路由',
    },
    {
        path: '/tinymce',
        component: TinymceComponent,
        name: '第一个路由',
    },
    {
        path: '/404',
        component: Errorpage,
        name: '第一个路由',
    }

]

export default routeConfig