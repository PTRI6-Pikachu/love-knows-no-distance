import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.Header}>
      
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    padding: 15,
    backgroundColor: '#f3bac7',
  },
  text: {
    color: '#000000',
    fontSize: 26,
    textAlign: 'center',
  }
});

export default Header;