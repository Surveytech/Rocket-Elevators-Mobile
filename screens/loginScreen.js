
import 'react-native-gesture-handler';
import React, { useState, useEffect, useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import {  ActivityIndicator, ImageBackground, StyleSheet, View, Text, Image, Title, ScrollView, Vibration, TextInput, SafeAreaView, Button, Appearance, TouchableOpacity, useColorScheme, Animated, Alert  } from 'react-native';
import image from '../images/Autostadt.jpg';

import axios from 'axios';

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState({ value: '', error: ''})

    const checkEmail =() => {

      let employee_email = email.value;
      if(employee_email == "") return alert("Email is required");
      console.log(employee_email);

      return axios.get(`https://csl-restapiweek-9.azurewebsites.net/Employees/${employee_email}`)
        .then(function(response){
          const statusCode = response.status;
          console.log(statusCode);
          if (statusCode == 200) {
            navigation.navigate("Home")
          }
        })
        .catch(function (error) {
          console.log(`This ${employee_email} is incorrect.`);
          alert(`${employee_email} is unavailable, please enter a valid email.`);
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
                placeholder="Email..."
                style={styles.input}
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
            <TouchableOpacity 
              mode="contained"
              style={styles.button}
              onPress={checkEmail} >
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity >        
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
      borderColor: 'Black',
      borderWidth: 2,
      paddingHorizontal: 20,
      paddingVertical: 5,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
        // fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',
    },
    input: {
      backgroundColor: "white",
      height: 40,
      margin: 12,
      borderWidth: 3,
      borderColor: "#9e040a",
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign: 'center',
      fontSize: 20,
    },
  });
  export default LoginScreen;

