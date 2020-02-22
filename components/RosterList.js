import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TauData from '../data/tau.json';

export function RosterList() {
  return(
    <View>
      <FlatList
        data={[TauData]}
        renderItem={({data}) => {data.publications.publication.map((pub => <Text>{pub.name}</Text> )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {

  },
  listItem: {
    backgroundColor: "#fff",
    padding: 20,
    display: 'flex',
    flexDirection: 'column'
  }
})