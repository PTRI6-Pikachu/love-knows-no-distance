import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackActions } from 'react-navigation';

function PartnerScreen({navigation}) {
  return (
    <View> 
      <Text>Partner Screen</Text>
      <Button title="Back to Feed" onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
}


export default PartnerScreen;