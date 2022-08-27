import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackActions } from 'react-navigation';

function HomeScreen({navigation}) {
  return (
    <View> 
      <Text>Home Screen</Text>
      <Button title="You" onPress={() => navigation.navigate('UserScreen')}
      />
    </View>
  );
}


export default HomeScreen;