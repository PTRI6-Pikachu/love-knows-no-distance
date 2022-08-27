import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/homeScreen.js'
import UserScreen from './screens/userScreen.js'
import PartnerScreen from './screens/partnerScreen.js'
import AlbumScreen from './screens/albumScreen.js';

//provides a way to transition between screens and manage nav history
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions ={{
          headerStyle: {
            backgroundColor: '#f3bac7',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        initialRouteName='Home'>
        <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        style={styles.container}
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <Button
              onPress={() => navigation.navigate('UserScreen')}
              title="You"
              color="#fff"
            />
          ),
          headerRight: () => (
            <Button 
            onPress={() => navigation.navigate('PartnerScreen')}
            title="TestBae"
            color="#fff"
            />
          ),
        })}
        />
        <Stack.Screen 
        name='UserScreen' 
        component={UserScreen} 
        options={{title:'About You'}}
        />
        <Stack.Screen
        name='PartnerScreen'
        component={PartnerScreen}
        options={{title:'♡︎'}}
        />
        <Stack.Screen
        name='AlbumScreen'
        component={AlbumScreen}
        options={{title:'Album'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  
});

export default App;