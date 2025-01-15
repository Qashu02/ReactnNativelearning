import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen from './app/components/Screen';

const Tweets = () => (
  <Screen>

    <Text>Tweets</Text>
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
