import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {  ActivityIndicator, ImageBackground, StyleSheet, View, Text, Image, ScrollView, Vibration, SafeAreaView, Button, Appearance, TouchableOpacity, useColorScheme, Animated, Alert  } from 'react-native';
import { TextInput, HelperText, List, Headline, Surface, Title} from 'react-native-paper';
import axios from 'axios';
import image from '../images/background.jpg';

const StatusScreen = ({navigation, route}) => {
 
  const id = route.params.id
  // const status = route.params.status
  const [isLoading, setLoading] = useState(true);
  const [showBtn, setShowBtn] = useState(false);
  const [status, setStatus] = useState();


  useEffect(() => {
    retrieveInfos();
  },[])

  const retrieveInfos  = () => {

    return axios.get(`https://csl-restapiweek-9.azurewebsites.net/elevators/${id}/status`)
    .then((response)=>{
      console.log(response.data + " get return")
      setStatus(response.data);
    })
    .catch((error) => {
      console.log(error)

    })
    .finally(() => {
      setLoading(false)
    });

  }

  const updateStatus = () =>{

    const test = 'online';


    return axios.post(`https://csl-restapiweek-9.azurewebsites.net/elevators/${id}/updatestatus`, test)
      .then((response => setstatus(response.data.status));
      .then((responseText) => {
        alert(responseText)
        setShowBtn(true)      
      })
      .catch((error) => {
          console.error(error);
      });
    };

   //console.log(data)
  return (

       <SafeAreaView style={styles.container}>
        <ImageBackground source={image} style={styles.image}>

        {isLoading ? <ActivityIndicator/> : (
          <Text  style={[
              styles.status,
              elevator.status != "Online" ?
              { backgroundColor: 'red' } 
              : { backgroundColor: 'green' }
                ]}>
              {elevator.status}
          </Text>
          )}
          <TouchableOpacity  
            color="black"
            icon="camera" 
            mode="outlined" 
            onPress={() => updateStatus()}>
            <Text style={styles.buttonText}>End Task</Text>
           End Task
        </TouchableOpacity>

        {showBtn? (
          <View>
              <Button backgroundColor= "blue"  color="black"
                icon="logout" mode="outlined" onPress={() => props.navigation.navigate("Sign In")}>
                Go Back To Log In
              </Button>  
           </View>) : (<View/>)}

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Status Screen</Text>
            {id? (
              <Text>The id is: {id} and the actual status is {status}</Text>
            ):(
              <Text> Didn't work </Text>)}

              <TouchableOpacity 
                mode="contained"
                style={styles.button}
                onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Go back to Status Screen</Text>
              </TouchableOpacity >
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
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
    status: {
      padding: 10,
      borderRadius: 10,
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 20,
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
  export default StatusScreen;