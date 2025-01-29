import * as SecureStore from 'expo-secure-store'
import { jwtDecode } from 'jwt-decode';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const key="authToken";

const storeToken= async authToken=>{

    try {
        await  SecureStore.setItemAsync(key, authToken)
        
    } catch (error) {
        console.log("Error in store Token", error)
    }
}

const getToken =async ()=>{
    try {
        return await SecureStore.getItemAsync(key)
        
    } catch (error) {
        console.log("Error in get Token");

    }
}
const getUser= async()=>{
    const token= await getToken();
     return (token)? jwtDecode(token):null 
}

const removeToken=async ()=>{
    try {
        SecureStore.deleteItemAsync(key)
    } catch (error) {
        console.log("Error in Removing the Token" , error )
    }
}

export default{
    storeToken,
    getUser,
    removeToken,
    getToken
}