import * as SecureStore from 'expo-secure-store'

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

const removeToken=async ()=>{
    try {
        SecureStore.deleteItemAsync(key)
    } catch (error) {
        console.log("Error in Removing the Token" , error )
    }
}

export default{
    storeToken,
    getToken,
    removeToken
}