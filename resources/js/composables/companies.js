import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useCompanies() {

    const company = ref([])
    const companies = ref([])
    const errors = ref('')
    const router = useRouter()

    const getCompanies = async () => {
        let response = await axios('/api/companies/')
        companies.value = response.data.data
    }

    const getCompany = async (id) => {
        let response = await axios('/api/companies/' + id )
        company.value = response.data.data
    }

    const storeCompany = async (data) => {
        try {
            await axios.post('/api/companies/', data)
            await router.push({ name: 'companies.index'})
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }

    }

    const updateCompany = async (id) => {
        try {
            await axios.put('/api/companies/'+ id, company.value)
            await router.push({ name: 'companies.index'})
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }

    }


    return {
        companies,
        company,
        getCompany,
        getCompanies,
        storeCompany,
        updateCompany,
        errors,
    }

}