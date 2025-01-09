
import { View,StyleSheet, Image } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import { Formik } from 'formik';
import * as Yup from 'yup'
import AppText from '../components/AppText';
import colors from '../config/colors';
import AppError from '../components/AppError';
import AppFormField from '../components/AppFormField';

const validationSchema= Yup.object().shape({
    email:Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})
function LogoScreen(props) {

    return (
    <Screen >

    <Image style={styles.logo} source={require('../assets/favicon.png')} />
    <Formik initialValues={{email:'', password:''}}
    onSubmit={(values)=>console.log(values)}
    validationSchema={validationSchema}>
       {({handleChange,handleSubmit,errors,setFieldTouched,touched})=>
       <>
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

<AppButton title={'login'} onPress={handleSubmit}/>
</Screen>
       </>
       }

    </Formik>
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