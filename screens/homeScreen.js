import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { TextInput, Button, HelperText, List, Headline, Surface, Title} from 'react-native-paper';
import axios from 'axios';

const HomeScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Elevators Status Screen"
          onPress={() => navigation.navigate('Status')}
        />
      </View>
    );
  }
  export default HomeScreen;