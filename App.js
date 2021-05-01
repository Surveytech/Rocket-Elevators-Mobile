import 'react-native-gesture-handler';
// import * as React from 'react';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { ImageBackground, StyleSheet, View, Text, Image, ScrollView, Vibration, TextInput, SafeAreaView, Button, Appearance, TouchableOpacity, useColorScheme, Animated, Alert  } from 'react-native';
import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import image from './images/background.jpg';

import LoginScreen from './screens/loginScreen'
import LoginView from './screens/loginView'
import LoginEmail from './screens/loginEmail'
import HomeScreen from './screens/homeScreen'
import StatusScreen from './screens/statusScreen'

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  dark: true,
  mode: 'exact',
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3072e0',
    accent: '#9e040a',
    background: '#fff',
    surface: '#fff',
    error: 'red',
    onSurface: '#ffffff',
    text: '#666',
  },
};

const App = () => {
  setStatusBarStyle('dark-content')
  return (
    <NavigationContainer >
    <PaperProvider theme={MyTheme}>
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ title: 'Welcome to the Rocket Elevators App',
          headerStyle:{
            backgroundColor:'#9e040a'
          },
          headerLeft:null,
          headerTitleStyle:{
            fontSize: 25,
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
      }}
      />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{ title: 'Employees Login Page',
          headerStyle:{
            backgroundColor:'#9e040a'
          },
            headerTitleStyle:{
            fontSize: 25,
            fontWeight: 'bold',
          },
          headerLeft:null,
          headerTitleAlign: 'center'
      }}
      />
      <Stack.Screen 
      name="Home" 
      component={HomeScreen}
      options={{ title: 'Elevators Page',
      borderColor: 'black',
      headerStyle:{
        backgroundColor:'#9e040a'
      },
        headerTitleStyle:{
        fontSize: 25,
        fontWeight: 'bold',
      },
      headerLeft:null,
      headerTitleAlign: 'center'
      }}
      />
      <Stack.Screen 
      name="Status" 
      component={StatusScreen}
      options={{ title: 'Status Page',
      headerStyle:{
        backgroundColor:'#9e040a'
      },
        headerTitleStyle:{
        fontSize: 25,
        fontWeight: 'bold',
      },
      headerLeft:null,
      headerTitleAlign: 'center'
      }}
      />
    </Stack.Navigator>
    </PaperProvider>
    </NavigationContainer>
  );
};

const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View>
          <Image style={styles.logo} source={require('./images/RE_transp.png')}/>
        </View>
        <TouchableOpacity 
          // title='Log in'
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
          >
          <Text style={styles.buttonText}>Access to Employees Login Page</Text>
          
        </TouchableOpacity> 
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title:{
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    position: 'absolute',
    top:-250,
    left:-125,
    width:250,
    height:100,
    marginBottom:20,
    marginTop:20,
  },
  button: {
    backgroundColor: '#3072e0',
    borderColor: '#000000',
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default App;