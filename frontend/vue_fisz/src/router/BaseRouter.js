import {
    createRouter,
    createWebHistory
} from 'vue-router'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import viewSet from '../views/viewSet'
import CreateSet from '../views/createSet'
import Sets from '../views/Sets'
import Error from '../views/Error'
import randomFlashCards from '../views/randomFlashCards'
import seeFlashCard from '../views/seeFlashCard'
import editSet from '../views/editSet'

export default createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/sign-up',
            name: 'SignUp',
            component: SignUp,
        },
        {
            path: '/log-in',
            name: 'LogIn',
            component: LogIn,
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/sets',
            name: 'Sets',
            component: Sets
        },
        {
            path: '/createset',
            name: 'CreateSet',
            component: CreateSet
        },
        {
            path: '/viewset/:id',
            name: 'viewSet',
            component: viewSet
        },
        {
            path: '/error',
            name: 'Error',
            component: Error
        },
        {
            path: '/random',
            name: 'randomFlashCards',
            component: randomFlashCards
        },
        {
            path: '/sets/learn/:id',
            name: 'seeFlashCard',
            component: seeFlashCard
        },
        {
            path: '/editset/:id',
            name: 'editSet',
            component: editSet
        },

    ]
})