// Index.android.js - Place code here for Android

// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => (
    <Text>Some Text for Chalsea</Text>
  );

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
