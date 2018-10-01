/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './styles';




export default class App extends Component{
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{this.props.title}</Text>
      </View>
    );
  }
}

