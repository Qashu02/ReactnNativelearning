import {createStackNavigator} from '@react-navigation/stack'
import WelcomeScreen from '../screen/WelcomeScreen';
import LogoScreen from '../screen/LogoScreen';

const Stack = createStackNavigator();

const AuthNavigation =()=>{
    return<>
<Stack.Navigator>
<Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown:false}}  />
<Stack.Screen name='Login' component={LogoScreen}/> 
<Stack.Screen name='Register' component={LogoScreen}/> 

    
</Stack.Navigator>
    </>

}

export default AuthNavigation;