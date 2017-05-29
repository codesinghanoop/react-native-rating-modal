import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Modal from 'react-native-rating-modal'

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
        <TouchableOpacity style={styles.pressMeButton} onPress ={() => {this.toggleModal()} }>
          <Text style={styles.pressButtonText}> Press Me! </Text>
        </TouchableOpacity>
        <Modal
          isVisible={this.state.isVisible}
          headerText='How was your experience?'
          detailsText='Please help others by rating you experience'
          ratingCallback={(value) => {this.ratingCallback(value)}}
          visibilityCallback={(value) => {this.visibilityCallback(value)}}
         />
        
        <Text style={styles.instructions}>
          {this.state.numberOfStarts}
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
  
  pressButtonText:{
    fontSize: 10,
    textAlign: 'center',
    margin: 10,
  },
  pressMeButton: {
    height: 50,
    width: 105,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'green',
    alignSelf: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 25
  },
});