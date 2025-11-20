import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function Futures() {
  return (
    <SafeAreaView>
        <Text>Futures Screen</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
