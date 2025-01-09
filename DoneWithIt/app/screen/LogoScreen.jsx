
import { View,StyleSheet, Image } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import { Formik } from 'formik';

function LogoScreen(props) {

    return (
    <Screen >

    <Image style={styles.logo} source={require('../assets/favicon.png')} />
    <Formik initialValues={{email:'', password:''}}
    onSubmit={(values)=>console.log(values)}>
       {({handleChange,handleSubmit})=>
       <>
<AppTextInput name={'email'}
placeholder='EnterEmail'
autoCapitalize='none'
onChangeText={handleChange("email")}
autoCorrect={false}
keyboardType= 'email-address'/>

<AppTextInput name={'lock'}
placeholder='Enter Pass'
onChangeText={handleChange("password")}
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