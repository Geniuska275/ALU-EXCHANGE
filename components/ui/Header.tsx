import React from "react";
import { Text, View } from "react-native";


export default function Header() {
  return (
    <>
     <View className="p-4 bg-white  border border-gray-200 ">
        <Text className="text-lg font-bold text-center ">App Header</Text>

     </View>
    </>
  );
}