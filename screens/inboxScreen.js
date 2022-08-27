import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackActions } from 'react-navigation';

function InboxScreen({navigation}) {
  return (
    <View>
      <Text>About You</Text>
      <Button title='go back' onPress={() => navigation.navigate('HomeScreen')}></Button>
    </View>
  );
}

export default InboxScreen;