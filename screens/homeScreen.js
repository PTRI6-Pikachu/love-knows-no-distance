import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { StackActions } from 'react-navigation';

function HomeScreen({navigation}) {
  return (
    <View> 
      <Text>Home Screen</Text>
      <Text>A post would go here....</Text>
      <Text>Maybe a notification here....</Text>
      <Text>And an image or two....</Text>
      <TextInput>And the user can post something here!</TextInput>
      <Button title="Go To Album" onPress={() => navigation.navigate('AlbumScreen')}
      />
    </View>
  );
}


export default HomeScreen;