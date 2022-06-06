import {
    createRouter,
    createWebHistory
} from 'vue-router'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import ViewFlashCards from '../views/ViewFlashCards'
import viewSet from '../views/viewSet'
import CreateSet from '../views/createSet'
import Sets from '../views/Sets'
import Error from '../views/Error'
import randomFlashCards from '../views/randomFlashCards'

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
            path: '/viewflashcards/:set_id',
            name: 'viewflashcards',
            component: ViewFlashCards
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

    ]
})