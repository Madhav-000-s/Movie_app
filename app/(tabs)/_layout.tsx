import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

const TabIcon=({title,icon,focused}:any)=>{
  if (focused){
  return(
  <>
          <ImageBackground source={images.highlight} className='flex flex-row items-center justify-center flex-1 min-w-[110px] min-h-16 mt-4 '>
            <Image source={icon} tintColor="#151312" className='size-5 mr-2'/>
            <Text className='text-secondary text-base font-semibold'>{title}</Text>
            </ImageBackground>
          </>)
  }
  else{
    return(
      <View className='size-full justify-center items-center mt-4 rounded-full'>
        <Image source={icon} className='size-5' tintColor="#A8B5DB"/>
      </View>
    )
  }
}

const _layout = () => {
  return (
    <Tabs screenOptions={{tabBarShowLabel:false,
      tabBarItemStyle:{
        width:'100%',
        height:'100%',
        justifyContent: 'center',
        alignItems:'center'
      },
      tabBarStyle:{
        backgroundColor:"#0F0D23",
        borderRadius:50,
        marginHorizontal:20,
        marginBottom:36,
        height:52,
        position: 'absolute',
        overflow:'hidden',
        borderWidth:1,
        borderColor:'#0f0d23'

      }
    }}>
        <Tabs.Screen name="index" options={{ headerShown: false ,title:"",tabBarIcon:({focused})=>(
         <TabIcon focused={focused} icon={icons.home} title="home"></TabIcon>
        )}} />
        <Tabs.Screen name="profile" options={{ headerShown: false,tabBarIcon:({focused})=>(
         <TabIcon focused={focused} icon={icons.person} title="profile"></TabIcon> )}} />
        <Tabs.Screen name="search" options={{ headerShown: false,tabBarIcon:({focused})=>(
          <TabIcon focused={focused} icon={icons.search} title="search"></TabIcon> )}} />
        <Tabs.Screen name="saved" options={{ headerShown: false,tabBarIcon:({focused})=>(
          <TabIcon focused={focused} icon={icons.save} title="saved"></TabIcon>) }} />
    </Tabs>
  )
}

export default _layout