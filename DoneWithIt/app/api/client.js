import {create} from 'apisauce'

const apiClient=create({
    baseURL:'http://192.168.0.104:9000/api'
})

apiClient.get('/listing').then(response=>{
    if(!response.ok){
        response.problem
    }
})