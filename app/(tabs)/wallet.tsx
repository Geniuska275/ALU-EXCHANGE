import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function Wallet() {
  return (
    <SafeAreaView style={styles.container}>
        <Text>wallet Screen</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
     container:{
    flex:1,
    backgroundColor:"white"

  },
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
