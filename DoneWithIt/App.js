import { Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Screen from './app/components/Screen';

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
<Link/>
  </Screen>
);

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

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
