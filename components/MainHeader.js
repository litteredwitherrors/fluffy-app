import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function MainHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fluffy fluff</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '15%',
    backgroundColor: '#333232'
  },
  heading: {
    padding: 20,
    marginTop: 30,
    color: '#fff',
    fontSize: 16
  }
}); 