
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './styles';


export default class App extends Component{
  render() {
    return (
      <View style={styles.itemBox} elevation={1}>
        <Text style={[styles.itemTitle, this.props.check && styles.itemTitleTrue]}>{this.props.title}</Text>
        <View style={
          this.props.check ?
          styles.itemCheckTrue : styles.itemCheckFalse
          } elevation={1}/>
      </View>
    );
  }
}

