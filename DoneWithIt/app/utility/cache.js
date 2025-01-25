import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
 const prefix='cache'
const store= async (key,value)=>{
    const item={
        value,
        timetamp:Date.now()
    }
    try {
    await  AsyncStorage.setItem(prefix+key, JSON.stringify(item));
        
    } catch (error) {
        console.log(error)
    }
   const isExpired =(item) =>{
    const now=moment(Date.now())
    const storedTime=moment(item.timetamp);
    return now.diff(storedTime,'minutes')>5;

   }
    const get = async (key)=>{
try {
    const value=await AsyncStorage.getItem(prefix+key);
    const item= JSON.parse(value);
    if(!item) return null;

    if(isExpired(item)) {
      await  AsyncStorage.removeItem(prefix+key)
    }
    return item.value
} catch (error) {
    console.log(error)
}
    }

}

export default{
    store,
    get
}