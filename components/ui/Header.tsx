import { Colors } from "@/constants/theme";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";



export default function Header() {
  const [activeTab,setActiveTab]=React.useState<"members" | "activity">("members");
  return (
    <>
     <View className="p-4 bg-[#FBFBFC] flex-row justify-between items-center ">
      <TouchableOpacity style={{
        width:40,
        height:40,
        backgroundColor:Colors.light.tint,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:8,
      }}>
       <FontAwesome5 name="user" size={24} color="white" />
      </TouchableOpacity>
          <View 
                      style={{
                        alignSelf:"center"
                      }}
                      className='mx-6 w-[150px] h-[40px] rounded flex flex-row justify-around border border-[#423546] mx-5  items-center'>
                        <TouchableOpacity
                        onPress={()=>setActiveTab("members")}
                         className={`${activeTab=="members" ? 'bg-[#423546] text-white p-2 w-[65px] rounded ' : 'p-2 w-[65px]'}  pb-2`}>
                            <Text style={{
                                textAlign:"center",
                                color: activeTab=="members" ? "white" : "gray",
                                fontWeight:"bold"
                            }}>CEX</Text>
                        </TouchableOpacity>
                          <TouchableOpacity
                          onPress={()=>setActiveTab("activity")}
                           className={`${activeTab=="activity" ? 'bg-[#423546] p-2 w-[65px] rounded' : ''} p-2 w-[65px]`}>
                            <Text
                            style={{
                                textAlign:"center",
                                color: activeTab=="activity" ? "white" : "gray",
                                fontWeight:"bold"
                            }} 
                            >DEX</Text>
                        </TouchableOpacity>
                      </View>
      <View className="flex flex-row items-center gap-2 mr-3">
        <AntDesign name="customer-service" size={34} color="#423546" />
        <Feather name="bell" size={34} color="#423546" />

      </View>

     </View>
    </>
  );
}