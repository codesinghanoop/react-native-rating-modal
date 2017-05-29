/* @flow */

import {StyleSheet, Dimensions} from 'react-native'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: height,
    zIndex: 9999
  },
  nameText: {
    fontSize: 10,
    marginTop: 12,
    textAlign: 'center'
  },
  contentContainer: {
    backgroundColor: '#FFF',
    borderRadius: 7,
    width: null,
    height: null,
    marginLeft: 32,
    marginRight: 32
  },
  modalButton: {
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
  modalButtonText: {
    fontSize: 12,
    color: 'green',
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: 'bold'
  },
  modalHelpText: {
    alignSelf: 'center',
    fontSize: 10,
    color: '#999'
  },
  modalLargeNumber: {
    fontSize: 36,
    color: 'green'
  },
  modalTitle: {
    fontSize: 12,
    color: '#313133',
    marginTop: 15
  },
  modalDesc: {
    fontSize: 9,
    color: '#666666',
    marginBottom: 15,
    width: 160
  },
  headerText: {
    fontSize: 13,
    color: '#323232',
    textAlign: 'center',
    marginTop: 25
  },
  detailsText: {
    fontFamily: 'System',
    fontSize: 11,
    color: '#4B4B4D',
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 25
  },
  subDetailsText: {
    fontFamily: 'System',
    fontSize: 11,
    color: '#4B4B4D',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15
  },
  subDetailsContainerStyle: {
    backgroundColor: '#F3F3F3'
  },
  okButtonStyle: {
    width: null,
    backgroundColor: 'green',
    height: 50,
    justifyContent: 'center',
    borderBottomLeftRadius:7,
    borderBottomRightRadius:7,
    borderWidth:0.1,
    borderColor:'red',
  },
  okButtonTextStyle: {
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',

  },
  declineButtonStyle: {
    width: null,
    backgroundColor: 'red',
    height: 50,
    justifyContent: 'center'
  },
  declineButtonTextStyle: {
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  bottomButtonStyle: {
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  }
});

export default styles
