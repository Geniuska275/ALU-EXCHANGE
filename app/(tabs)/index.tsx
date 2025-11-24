
import Header from '@/components/ui/Header';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={{
        alignSelf:"center",
        width:"90%",
        height:60,
        backgroundColor:"#FBFBFC",
        marginTop:20,
        borderRadius:40,
        padding:16,
        flexDirection:"row",        alignItems:"center",
        gap:10,
      }}>
        <EvilIcons name="search" size={24} color="black" />
      
      <TextInput placeholder='Search...' className='text-[#423546]'/>

      </View>

      <View style={{
        alignSelf:"center",
        width:"90%",
        height:500,
        backgroundColor:"#FFFF",
        marginTop:40,
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0.84,
        elevation: 5,
      }}>
      


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
