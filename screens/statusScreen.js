import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground, StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { TextInput, Button, HelperText, List, Headline, Surface, Title} from 'react-native-paper';
import axios from 'axios';

const StatusScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DStatus Screen</Text>
        <Button
          title="Go back to Status Screen"
          onPress={() => navigation.navigate('Status')}
        />
      </View>
    );
  }
  export default StatusScreen;