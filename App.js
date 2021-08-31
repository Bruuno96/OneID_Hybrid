import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Switch } from 'react-native-elements';
import HomeScreen from './components/HomeScreen';
import CadastrarTag from './components/CadastrarTag';
import MyTabs from './components/MyTabs'
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";




export default function App() {
  return (
    <NavigationContainer >
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
	// iconTabRound: {
  //       width: 60,
  //       height: 60,
  //       borderRadius: 30,
  //       marginBottom: 20,
  //       flexDirection: 'row',
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //       elevation: 6,
  //       shadowColor: '#9C27B0',
  //       shadowOffset: { width: 0, height: 2 },
  //       shadowOpacity: 0.2,
  //       shadowRadius: 5,
  //   }
});