
import { View,StyleSheet, Image } from 'react-native';
import Screen from '../components/Screen';

import {AppError,AppForm,AppFormField,SubmitButton} from '../components/forms'

import * as Yup from 'yup'



const validationSchema= Yup.object().shape({
    email:Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})
function LogoScreen(props) {

    return (
    <Screen >

    <Image style={styles.logo} source={require('../assets/favicon.png')} />
    <AppForm initialValues={{email:'', password:''}}
    onSubmit={(values)=>console.log(values)}
    validationSchema={validationSchema}>

       
<AppFormField name="email"
placeholder="Enter Email"
autoCapitalize='none'
label='email'
autoCorrect={false}
keyboardType= 'email-address'/>


<AppFormField name='lock'
placeholder='Enter Pass'
label='password'
autoCapitalize='none'
autoCorrect={false}
keyboardType= 'numeric'
secureTextEntry/>
       
<Screen>
<SubmitButton title={'login'}/>
</Screen>
   
       

    </AppForm>
    </Screen>
    );
}
const styles = StyleSheet.create({
  logo:{
width:80,
height:80,
alignSelf:'center',
margin:50
    }
})

export default LogoScreen;