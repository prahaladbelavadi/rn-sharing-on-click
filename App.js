import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import {  Text, View } from 'react-native';
// import Share from 'react-native-share';
import { Share, View, Button, StyleSheet } from 'react-native';

// Share.open(options)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     err && console.log(err);
//   });

export default function App() {
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message:
          'Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
        url:
          'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{ marginTop: 50 }}>
      <Button onPress={onShare} title="Share" />
    </View>
  );

  // return (
  //   <View style={styles.container}>
  //     <Text>HHALALALALA!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
