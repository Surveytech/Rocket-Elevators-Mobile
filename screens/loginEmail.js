// import 'react-native-gesture-handler';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Provider as PaperProvider } from 'react-native-paper';
// import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
// import { ImageBackground, StyleSheet, View, Text, Image, ScrollView, Vibration, TextInput, SafeAreaView, Button, Appearance, TouchableOpacity, useColorScheme, Animated, Alert  } from 'react-native';
// import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
// import image from '../images/background.jpg';

// export default function EmployeeList {
//   state = {
//     email: '',
//   }

//   handleChange = event => {
//     this.setState({ email: event.target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     const user = {
//       email: this.state.email
//     };

//     axios.post(`https://csl-restapiweek-9.azurewebsites.net/Employees`, { email })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }

//   render = () => {
//     return (
//     <SafeAreaView style={styles.container}>
//     <ImageBackground source={image} style={styles.image}>
//         <View>
//             <form onSubmit={this.handleSubmit}>
//             <label>
//                 Employee Email:
//                 <input type="text" name="email" onChange={this.handleChange} />
//             </label>
//             <button type="submit">Add</button>
//             </form>
//         </View>
//     </ImageBackground>
//     </SafeAreaView>  
//     //   <div>
//     //     <form onSubmit={this.handleSubmit}>
//     //       <label>
//     //         Employee Email:
//     //         <input type="text" name="email" onChange={this.handleChange} />
//     //       </label>
//     //       <button type="submit">Add</button>
//     //     </form>
//     //   </div>
      
//     );
//   };
// }
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       flexDirection: 'column',
//     },
//     title:{
//       color: '#fff',
//       fontSize: 25,
//       fontWeight: 'bold',
//     },
//     image: {
//       flex: 1,
//       resizeMode: 'cover',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     text: {
//       textAlign: 'center',
//       color: 'grey',
//       fontSize: 20,
//       fontWeight: 'bold',
//     },
//     logo: {
//       position: 'absolute',
//       top:-250,
//       left:-125,
//       width:250,
//       height:100,
//       marginBottom:20,
//       marginTop:20,
//     },
//     button: {
//       backgroundColor: '#3072e0',
//       padding: 20,
//       borderRadius: 10,
//       width: 150,
//       textAlign: 'center',
//     },
//     buttonText: {
//       fontSize: 20,
//       color: 'white',
//       fontWeight: 'bold',
//     },
//   });