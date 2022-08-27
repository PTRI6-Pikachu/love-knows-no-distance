import React from 'react';
import { Text, View, ScrollView } from "react-native";

export default function AlbumScreen({navigation}) {
  <View style={{ flex: 1 , alignItems: 'center', justifyContent: 'center'}}>
    <Text>Album</Text>
    <ScrollView>
      //populate with photos!
      {/* <Image source={require('../assets/P7730_701-29237_01_full')}/>
      <Image source={require('../assets/PGO_EN_27')}/>
      <Image source={require('../assets/Pikachu_artwork_for_Pokémon_Red_and_Blue.webp')}/> */}
      <Text>Test 1</Text>
      <Text>Test 2</Text>
      <Text>Test 3</Text>
    </ScrollView>

  </View>
}