import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import PushNotification from "react-native-push-notification";
import Nofication from './screens/Nofication';
import data from './db/sample';
const App = () => {

//<================calling funciton ==============>
useEffect(()=>{
createChannels()
},[])
//<================calling funciton ==============>


//create notification channel 
const createChannels=()=>{
  PushNotification.createChannel(
    {
      channelId:"test-channel",
      channelName:"Test Channel",
    }
  )
}





  return (
    <>
    {data.map((item,index)=>{
      return <Nofication item={item} index={index} key={index}  />
    })}
    </>
  )
}

export default App

const styles = StyleSheet.create({})