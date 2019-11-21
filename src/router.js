import Home from './views/home'
import About from './views/About'
import Info from './views/Info'
import Reduxstore from './views/Reduxstore'
import Errorpage from './views/error'
import Login from './views/login'

// const routeConfig = [
//     {
//         path: '/',
//         component: Info,
//         name: '第一个路由',
//         exact: true
//     },
//     {
//         path: '/home',
//         component: Home,
//         name: '第一个路由',
//         routes: [
//             { path: '/home/info', component: Info},
//             { path: '/home/about', component: About },
//             { path: '/home/redux', component: Reduxstore },
//         ]
//     }
// ]
const routeConfig = {

}
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
        path: '/404',
        component: Errorpage,
        name: '第一个路由',
    }

]

export default routeConfig