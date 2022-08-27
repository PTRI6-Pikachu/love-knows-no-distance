import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackActions } from 'react-navigation';

function SettingsScreen({navigation}) {
  return (
    <View>
      <Text>Settings</Text>
      <Button title='go back' onPress={() => navigation.navigate('HomeScreen')}></Button>
    </View>
  );
}

export default SettingsScreen;