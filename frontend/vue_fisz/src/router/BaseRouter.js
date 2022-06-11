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
import store from '../store'

function guardMyroute(to, from, next)
{
 var isAuthenticated =  store.state.isAuthenticated

if(isAuthenticated) {
  next(); // allow to enter route
 } else{
  next('/log-in'); // go to '/login';
 }
}

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
            beforeEnter : guardMyroute,
            component: Dashboard
        },
        {
            path: '/sets',
            name: 'Sets',
            beforeEnter : guardMyroute,
            component: Sets
        },
        {
            path: '/createset',
            name: 'CreateSet',
            beforeEnter : guardMyroute,
            component: CreateSet
        },
        {
            path: '/viewset/:id',
            name: 'viewSet',
            beforeEnter : guardMyroute,
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
            beforeEnter : guardMyroute,
            component: randomFlashCards
        },
        {
            path: '/sets/learn/:id',
            name: 'seeFlashCard',
            beforeEnter : guardMyroute,
            component: seeFlashCard
        },
        {
            path: '/editset/:id',
            name: 'editSet',
            beforeEnter : guardMyroute,
            component: editSet
        },

    ]
})