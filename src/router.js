import Home from './views/home'
import About from './views/About'
import Info from './views/Info'
import Reduxstore from './views/Reduxstore'

const routeConfig = [
    {
        path: '/',
        component: Info,
        name: '第一个路由',
        exact: true
    },
    {
        path: '/home',
        component: Home,
        name: '第一个路由',
        routes: [
            { path: '/home/info', component: Info},
            { path: '/home/about', component: About },
            { path: '/home/redux', component: Reduxstore },
        ]
    }
]
export default  routeConfig