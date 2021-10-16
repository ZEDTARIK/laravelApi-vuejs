import { createRouter, createWebHistory } from 'vue-router'
import CompaniesIndex  from '../components/companies/CompaniesIndex.vue'
import CompanyCreate  from '../components/companies/CompanyCreate.vue'
import CompanyEdit  from '../components/companies/CompanyEdit.vue'

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
    },
    {
        path: '/companies/:id/edit',
        name: 'company.edit',
        component: CompanyEdit,
        props: true
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
