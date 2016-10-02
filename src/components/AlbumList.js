// Import libraries
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Create component
class AlbumList extends Component {
  componentWillMount() {
    console.log('componentWillMount in AlbumList');
  }

  render() {
    return (
      <View>
        <Text>Album List!!!</Text>
      </View>
    );
  }
}

// Make component available to other parts of the app
export default AlbumList;
