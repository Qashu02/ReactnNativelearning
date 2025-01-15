import { Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Screen from './app/components/Screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Link=()=>{
  const navigation=useNavigation();
  return (
    <Button title='Click Me'
     onPress={()=> navigation.navigate('TweetsDetails',{id:1})} />
  );
}
const Tweets = ({navigation}) => (
  <Screen>

    <Text>Tweets</Text>

  </Screen>
);
const Account =( ) =>  <Text> Account is ready </Text> 


const TweetsDetails = ({route}) => (
  <Screen>

    <Text> Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{backgroundColor:
        'tomato'
      },
      headerTintColor:'white'
    }}>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen name="TweetsDetails" component={TweetsDetails}
      options={{headerStyle:{backgroundColor:
        'dodgerblue'
      },
      headerTintColor:'white'}} />
    </Stack.Navigator>
  );
};
const Tab=createBottomTabNavigator()

const TabNavigator=()=>{
  return(
    <Tab.Navigator screenOptions={{tabBarActiveBackgroundColor:'tomato',
      tabBarActiveTintColor:"white"
    }} >

<Tab.Screen name='Tweets' component={Tweets} options={{tabBarIcon:({size,color})=><MaterialCommunityIcons name='home' color={color} size={size} />}}/>
<Tab.Screen name='Account' component={Account} options={{tabBarIcon:({size,color})=><MaterialCommunityIcons name='account' color={color} size={size} />}}/>
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
     <TabNavigator/>
    </NavigationContainer>
  );
}
