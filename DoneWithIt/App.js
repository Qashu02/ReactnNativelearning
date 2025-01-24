import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

export default function App() {
  const netInfo = useNetInfo();
  
  console.log(netInfo); // Logs network status

  return (
    <View style={styles.container}>

  {netInfo.isConnected? <Text >Hi</Text> : <Text>No</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});
