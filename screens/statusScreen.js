import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {  ActivityIndicator, ImageBackground, StyleSheet, View, Text, Button, Image, ScrollView, Vibration, SafeAreaView, Appearance, TouchableOpacity, useColorScheme, Animated, Alert  } from 'react-native';
import { TextInput, HelperText, List, Headline, Surface, Title, Appbar} from 'react-native-paper';
import axios from 'axios';
import image from '../images/background.jpg';
import LoginScreen from './loginScreen';
import HomeScreen from './homeScreen';

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

    return axios.put(`https://csl-restapiweek-9.azurewebsites.net/elevators/${id}/updatestatus?status=Online`)
      .then((response) => {
        setChange(response.status);
        console.log("Return data =" + response.status)
        setShowBtn(true);
        alert(`Response code: ${response.status}`);
      })
      .catch((error) => {
          console.error(error);
          setError(error.code);
      })
    }

   console.log(change)

    // let errorMessage = (
    // <View>
    //   {errorMSG ? (
    //     <Text>{errorMSG}</Text>
    //   ) : (
    //     <Text>
    //       Error
    //     </Text>
    //   )}
    // </View>);

    // let responseCodeMessage = (
    //   <View>
    //     {change == 204? (
    //       <View>
    //         <Text style={styles.status,{backgroundColor: 'green'}}>
    //           Online
    //         </Text>
    //       </View>
    //     ) : (         
    //       <View>
    //         <Text style={styles.status,{backgroundColor: 'red'}}>
    //         Inactive
    //         </Text>
    //       </View>
    //     )}
    //   </View>
    // )

  return (

       <SafeAreaView style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          
          <TouchableOpacity >
          <View>
           {isLoading ? ( <ActivityIndicator/> ) : ( <View>
            {change == 204? (
              <View>
                <Text style={styles.button,{backgroundColor: 'green', color:'#fff', height:40, justifyContent:'center', textAlign:'center', fontSize:18, borderRadius:10}}>
                  Online
                </Text>
              </View>
            ) : (         
              <View>
                <Text style={{backgroundColor: 'red', color:'#fff', height:40, justifyContent:'center', textAlign:'center', fontSize:18, borderRadius:10}}>
                Inactive
                </Text>
              </View>
            )}
            </View> )}
          </View>

            <Button 
              title="Put Status Online"
              color="#3072e0"
              icon="camera" 
              mode="contained" 
              onPress={() => updateStatus()}/>

          {showBtn? (
            <View>
                <Button 
                mode="contained"
                title="Go Back To Log In"
                backgroundColor= "blue"  
                color="black"
                icon="logout" 
                onPress={() => {navigation.navigate('Login')}}/>

            </View>) : (<View/>)
          }
          </TouchableOpacity >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Status Screen</Text>
            {id? (
              <Text>The id is: {id} and the actual status is {status}</Text>
            ):(
              <Text> Didn't work </Text>)}

              <TouchableOpacity 
                mode="contained"
                style={styles.button}
                onPress={() => navigation.navigate('Status')}>
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