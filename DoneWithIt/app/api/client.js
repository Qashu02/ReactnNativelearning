import {create} from 'apisauce'
import cache from '../utility/cache';
import AuthStorage from '../auth/storage'
const apiClient=create({
    baseURL:'http://192.168.0.104:9000/api'
})
apiClient.addAsyncRequestTransform(async(request)=>{
const token= await AuthStorage.getToken()
return(token)? request.headers["x-auth-tokem"]=token :null
})
const get =apiClient.get;
apiClient.get=async (url,params,axiosConfig)=>{
   const response= await get(url,params,axiosConfig);
   if(response.ok){
    cache.store(url,response.data)
    return response;
   }
   const data= await cache.get(url);
     return data? {ok:true,data}: response
}

export default apiClient;