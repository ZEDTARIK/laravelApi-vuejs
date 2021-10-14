import { createRouter, createWebHistory } from 'vue-router'
import CompaniesIndex  from '../components/companies/CompaniesIndex.vue'
import CompanyCreate  from '../components/companies/CompanyCreate.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'companies.index',
        component: CompaniesIndex
    },
    {
        path: '/companies/create',
        name: 'company.create',
        component: CompanyCreate
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
