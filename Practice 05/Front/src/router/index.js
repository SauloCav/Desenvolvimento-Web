import { createRouter, createWebHistory} from 'vue-router'
import InsertFunc from '../views/InsertFunc.vue'
import UpdateFunc from '../views/UpdateFunc.vue'
import DeleteFunc from '../views/DeleteFunc.vue'
import ShowFunc from '../views/ShowFunc.vue'
import SearchIdFunc from '../views/SearchIdFunc.vue'
import SearchCargoFunc from '../views/SearchCargoFunc.vue'
import SearchNumFunc from '../views/SearchNumFunc.vue'

const routes = [

    {
        path: '/',
        name: 'InsertFunc',
        component: InsertFunc
    },

    {
        path: '/UpdateFunc',
        name: 'UpdateFunc',
        component: UpdateFunc
    },

    {
        path: '/DeleteFunc',
        name: 'DeleteFunc',
        component: DeleteFunc
    },

    {
        path: '/ShowFunc',
        name: 'ShowFunc',
        component: ShowFunc
    },

    {
        path: '/SearchIdFunc',
        name: 'SearchIdFunc',
        component: SearchIdFunc
    },

    {
        path: '/SearchCargoFunc',
        name: 'SearchCargoFunc',
        component: SearchCargoFunc
    },

    {
        path: '/SearchNumFunc',
        name: 'SearchNumFunc',
        component: SearchNumFunc
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router