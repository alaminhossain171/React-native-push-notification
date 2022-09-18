import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PushNotification from 'react-native-push-notification';

const Nofication = ({item, index}) => {
  function handleClick(item, index) {


    PushNotification.cancelAllLocalNotifications()
// PushNotification.cancelLocalNotification(2)
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: `${item.name} notification`,
      message: `${item.name} won cricket`,
      id: index,
      bigText:`${item.name} won the match by 31 runs! lormjsfklsjdflksjflskjdf
       sdfjksldfjklsdjf sdfkj  sdkalfjlskdfjsldkfjslkd
        dsjfsdklfj sdfkjsd fjs fd
         fsdjfksldjf sdfkljsdfkl sdf`,
      color: 'red',
      
    });



// schedule msg 

PushNotification.localNotificationSchedule({
    channelId:"test-channel",
    title:"Schedule notification for "+item.name+" country",
    message:"you click "+item.name+" schecudule 10 second ago ",
    date:new Date(Date.now()+10*1000),
    allowWhileIdle:true,
})

  }

  return (
    <View style={{margin: 10}}>
      <Button title={item.name} onPress={() => handleClick(item, index)} />
    </View>
  );
};

export default Nofication;

const styles = StyleSheet.create({});
