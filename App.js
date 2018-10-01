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
  View
} from 'react-native';
import styles from './styles';
import Header from './Header';
import Item from './Item';


export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Header title={"butun Tasks"} />
        <View style={styles.itemContainer}>
        <Item title={"Caliskan ol"} check={false} />
        <Item title={"Saga gidem"} check/>
        <Item title={"Sola gidem"} check={true}/>
        <Item title={"Ders calis"} check={false}/>
        <Item title={"Gezem tozam"} check={true}/>
        </View>
        <View style={styles.containerButton}>
          <View style={styles.createButton}>
            <Text style={styles.createButtonText}>+</Text>
          </View>
        </View>

      </View>
    );
  }
}

