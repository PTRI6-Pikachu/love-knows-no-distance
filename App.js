import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/homeScreen.js'
//main page of the app with scrolling feed

// function HomeScreen({navigation}) {
//   return (
//     <View style={styles.container}> 
//       <Header />
//       <Text>Home Screen</Text>
//       <Button title="You" onPress={() => navigation.navigate('UserScreen')}
//       />
//     </View>
//   );
// }

//provides user info and logout functionality
function UserScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>User Info Will Go Here!</Text>
    </View>
  )
}

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
        <Stack.Screen name="LKND" component={HomeScreen} style={styles.container}/>
        <Stack.Screen name='Current User' component={UserScreen} options={{title:'About You'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

{/* <View style={styles.container}>
      <Text style= {{color: '#888', fontSize: 18}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  
});

export default App;