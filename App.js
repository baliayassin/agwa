import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../agwa/components/home'
import Details from '../agwa/components/details'
import {createStore} from 'redux'
import store from './components/redux/store'
import { Provider } from 'react-redux'
import Device from '../agwa/components/device' 

const Stack = createStackNavigator();


 function App() {
  return (

    
    <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor='white' />
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Device" component={Device}/>
    </Stack.Navigator>
  </NavigationContainer>
  

    
  );
}


function AppProvider(){

  return (
  <Provider store={store}>
    <App/>
  </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default AppProvider;