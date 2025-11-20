
import Header from '@/components/ui/Header';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      
        <Text className='bg-red-200 text-2xl mt-3 p-4'>Home Screen</Text>
        <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500 text-center bg-yellow-200 p-4">
        Welcome to Nativewind!
      </Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"

  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
