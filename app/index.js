import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Header } from '../components/Header/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      {/* Input Search */}

      {/* List Items... */}
      <View style={styles.content}>
        <Text style={styles.text}>Today’s tasks</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
  // Listing
  content: {
    flex: 1
  },
  text: {
    color: '#fff',
    fontFamily: 'Roboto_700Bold',
    fontSize: 24,
    lineHeight: 24,
    fontWeight: 600,
  },
});
