import { Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Screen from './app/components/Screen';

const Link=()=>{
  const navigation=useNavigation();
  return (
    <Button title='Click Me' onPress={()=> navigation.navigate('TweetsDetails')} />
  );
}
const Tweets = ({navigation}) => (
  <Screen>

    <Text>Tweets</Text>
<Link/>
  </Screen>
);

const TweetsDetails = () => (
  <Screen>

    <Text>Tweets Detail</Text>
  </Screen>
);

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen name="TweetsDetails" component={TweetsDetails} />
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
