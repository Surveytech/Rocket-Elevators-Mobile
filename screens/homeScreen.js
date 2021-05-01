import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Dimensions, ImageBackground, StyleSheet, View, Text, Image, ScrollView, ActivityIndicator, Vibration, TextInput, SafeAreaView, Button, Appearance, TouchableOpacity, useColorScheme, Animated, Alert  } from 'react-native';
import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import image from '../images/Background-2.jpg';
import axios from 'axios';
import { set } from 'react-native-reanimated';

const HomeScreen = ({navigation}) => {

  const [elevators, setElevators] = useState();
  const windownHeight = Dimensions.get('window').height;
  const windownWidth = Dimensions.get('window').width;


    useEffect(() => {
      listElevators();
    },[])

  const listElevators = () => {

    return axios.get(`https://csl-restapiweek-9.azurewebsites.net/elevators/inactiveelevators`)
    .then((response)=>{
      console.log(response.data)
      setElevators(response.data);
    })
    .catch((error) => {
      console.log(error)

    });
  }


    return (
 
          <SafeAreaView style={styles.container}>
          <ImageBackground source={image} style={styles.image}>
            <View style={{height: (windownHeight*0.1), marginTop:30}}>
              <Image style={styles.logo} source={require('../images/RE_transp.png')}/>
            </View>

            <View style={{width: (windownWidth*0.7), height: (windownHeight*0.6)}}>
              <ScrollView style={{borderColor:'black', borderWidth: 2, backgroundColor:'#666'}}>
                {elevators? (
                  <View>
                      {elevators && elevators.map((elevator) => {
                        const id = `ID: ${elevator.id}`
                        const serialNumber = `${elevator.serialNumber}`
                        return (
                          <TouchableOpacity
                          onPress={() => {navigation.navigate('Status', {id: elevator.id})}}>
                          <Text style={{color:'#fff', textAlign: 'center', fontSize: 14, marginTop: 10}} key={elevator.id}>{id}       Serial: {serialNumber} </Text>
                          </TouchableOpacity>
                        )
                      })}
                  </View>
                ) : ( <View><Text>LOADING</Text></View> )}
              </ScrollView>
            </View>
            {/* <View style={{padding:30}}></View> */}
            <View style={{height: (windownHeight*0.05)}}/>
            <View style={{height: (windownHeight*0.1)}}>
              <TouchableOpacity 
                // title='Log in'
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={styles.buttonText}>Back to the Login Page</Text>
              </TouchableOpacity>  
            </View>
          </ImageBackground>
        </SafeAreaView>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    justifyContent: 'space-between'
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
    top:-60,
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
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },

  buttonText: {
    fontSize: 20,
    color: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
  export default HomeScreen;