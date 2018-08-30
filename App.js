/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
  <View style={styles.container} >
    <Text style={styles.welcome}>
     Nama = Agfid Danu Prasetyo 
    </Text>
    <Text style={styles.welcome}>
     Kelas = XI RPL 1 
    </Text>
    <Text style={styles.welcome}>
     No Absen = 01
    </Text>
    <Image
      style={{width: 250, height: 250}}
      source={{uri:'https://instagram.fsub2-1.fna.fbcdn.net/vp/ac0fdbe5769b4c4ccd72ab42a8468574/5C2F6E06/t51.2885-15/e35/31150158_2144364028912895_8751780818117984256_n.jpg'}}
      />
  </View>
	
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  welcome: {
    fontSize: 18,
    textAlign: 'left',
	color: 'purple',
    margin: 1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
