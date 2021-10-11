import  { ref } from 'vue'
import axios  from 'axios'
import { useRouter } from 'vue-router'

export default function useCompanies() {

    const company = ref([])
    const companies = ref([])

    const errors =ref('')
    const router  = useRouter()

    const getCompanies = async() => {
        let response  = await axios('/api/companies/')
        companies.value = response.data.data
    }


    return {
        companies,
        getCompanies,
    }
    
}