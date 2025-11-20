import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function TabTwoScreen() {
  return (
<SafeAreaView style={styles.container}>
  <Text>Trade </Text>

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
