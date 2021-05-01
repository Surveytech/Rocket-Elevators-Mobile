import React, { useState, useEffect } from 'react';
import {  ActivityIndicator, ImageBackground, StyleSheet, View, Text, Button, Image, ScrollView, Vibration, SafeAreaView, Appearance, TouchableOpacity, useColorScheme, Animated, Alert  } from 'react-native';
import axios from 'axios';
import image from '../images/background.jpg';


const StatusScreen = ({navigation, route}) => {
 
  const id = route.params.id
  const status = route.params.status
  const [isLoading, setLoading] = useState(true);
  const [showBtn, setShowBtn] = useState(false);
  const [data, setData] = useState();
  const [change, setChange] = useState();
  const [update, setUpdate] = useState();
  const [errorMSG, setError] = useState();

  useEffect(() => {
    return axios.get(`https://csl-restapiweek-9.azurewebsites.net/elevators/${id}/status`)
    .then((response)=>{
      console.log("Elevator Id=" + id)
      console.log(response.data + " get return")
      setData(response.data);
    })
    .catch((error) => {
      console.log(error)

    })
    .finally(() => {
      setLoading(false)
    });
  },[]);

  const updateStatus = () =>{
    // api call to change the status of the elevator
    return axios.put(`https://csl-restapiweek-9.azurewebsites.net/elevators/${id}/updatestatus?status=Online`)
      .then((response) => {
        setChange(response.status);
        console.log("Return data =" + response.status)
        setShowBtn(true);
        alert(`Response code: ${response.status} \nStatus change is a success`);
      })
      .catch((error) => {
          console.error(error);
          setError(error.code);
      })
    }

   console.log(change)

  return (

      <SafeAreaView style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
        <ScrollView>
          
          <TouchableOpacity >
              <View>
              {isLoading ? ( <ActivityIndicator/> ) : ( <View>
                {change == 204? (
                  <View>
                    <Text style={styles.green}>
                      Elevator {id} is now Online
                    </Text>
                  </View>
                ) : (         
                  <View>
                    <Text style={styles.red}>
                    Elevator {id} is Inactive
                    </Text>
                  </View>
                )}
                </View> )}
              </View>

              {showBtn? (
            
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity 
                      mode="contained"
                      style={styles.button}
                      onPress={() => navigation.navigate('Login')}>
                      <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity >
                </View>)

                : (
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
                    <TouchableOpacity 
                        mode="contained"
                        style={styles.button}
                        onPress={() => updateStatus()}>
                        <Text style={styles.buttonText}>Put Status Online</Text>
                    </TouchableOpacity > 
      
                </View>)
              }
          </TouchableOpacity >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity 
                mode="contained"
                style={styles.button}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Go back to Elevators Screen</Text>
              </TouchableOpacity >
          </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    red: {
      backgroundColor: 'red',
      textAlign: 'center',
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 10,
      marginTop:50,
      color:'#fff', 
      justifyContent:'center', 
      fontSize:20, 
      fontWeight: 'bold',
      borderRadius:10,
    },
    green: {
      backgroundColor: 'green',
      textAlign: 'center',
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 10,
      marginTop:50,
      color:'#fff', 
      justifyContent:'center', 
      // textAlign:'center', 
      fontSize:20, 
      fontWeight: 'bold',
      borderRadius:10,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    title:{
        color: '#000000',
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
      borderColor: '#000000',
      borderWidth: 2,
      paddingHorizontal: 20,
      paddingVertical: 5,
      marginTop:20,
      marginBottom:20,
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