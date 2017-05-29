/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Modal from './index.js'

export default class example extends Component {
  
  constructor(props)
  {
    super(props)
    this.state={
      isVisible: false,
      numberOfStarts: -1
    }
  }
  
  toggleModal()
  {
    this.setState({isVisible:!this.state.isVisible})
  }
  
  ratingCallback(value)
  {
    this.setState({ numberOfStarts: value })
  }
  
  visibilityCallback(value)
  {
    this.setState({ isVisible: value })
  }
  
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <TouchableHighlight onPress ={() => {this.toggleModal()} }>
          <Text> Press Me! </Text>
        </TouchableHighlight>
        <Modal
          isVisible={this.state.isVisible}
          headerText='How was your experience?'
          detailsText='Please help others by rating you experience'
          ratingCallback={(value) => {this.ratingCallback(value)}}
          visibilityCallback={(value) => {this.visibilityCallback(value)}}
         />
        
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('example', () => example);
