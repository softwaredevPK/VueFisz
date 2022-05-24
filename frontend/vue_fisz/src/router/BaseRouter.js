import {createRouter, createWebHistory} from 'vue-router'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import Dashboard from '../views/Dashboard.vue'
import ViewFlashCards from '../views/ViewFlashCards'


export default createRouter({
    history: createWebHistory(),
    routes: [
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
    }
]
}
)