import React from 'react';
import { StatusBar, View, StyleSheet, Text, ScrollVoew } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function AssetExample() {
  return (
    <View style={styles.container}>
        <Text>Oii</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
