
import 'react-native-gesture-handler';
import React, { useState, useEffect, useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { ImageBackground, StyleSheet, View, Text, Image, Title, ScrollView, Vibration, TextInput, SafeAreaView, Button, Appearance, TouchableOpacity, useColorScheme, Animated, Alert  } from 'react-native';
import image from '../images/Autostadt.jpg';

import axios from 'axios';

// const APIKit = axios.create({
//   baseURL: 'https://csl-restapiweek-9.azurewebsites.net/Employees',
// });

// export const setClientToken = token => {
//   APIKit.interceptors.request.use(function(config) {
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   });
// };

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState({ value: '', error: ''})
    var emailemployee = email.value;

    const checkEmail =() => {

      let employee_email = email.value;
      if(employee_email == "") return alert("Email is required");

      return axios.get(`https://csl-restapiweek-9.azurewebsites.net/Employees/${employee_email}`)
        .then(function(response){
          const statusCode = response.status;
          if (statusCode == 200) {
            navigation.reset({
              index: 0,
              routes: [{name: 'Home'}],
            })
          }
        })
        .catch(function (error) {
          console.log('This ${employee_email} is incorrect.');
          alert('${employee_email} is unavailable, please enter a valid email.');
        })
        .then(function(){

        });
    }
    return (
        <SafeAreaView style={styles.container}>
          <ImageBackground source={image} style={styles.image}>
              <View>
                  <Image style={styles.logo} source={require('../images/RE_transp.png')}/>
              </View>
              <TextInput
                Label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({value: text, error: ''})}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                required
              />
            <Button 
              mode="contained"
              style={styles.button}
              onPress={checkEmail} >
              Login
            </Button>
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
        color: '#fff',
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
        top:-180,
        left:-125,
        width:250,
        height:100,
        marginBottom:20,
        marginTop:20,
    },
    button: {
        backgroundColor: '#3072e0',
        padding: 20,
        borderRadius: 10,
        width: 200,
        textAlign: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
  });
  export default LoginScreen;

