import client from './client'

const register=(PushToken)=> client.post("/expoPushTokens",{ token:PushToken});

export default{
    register
}