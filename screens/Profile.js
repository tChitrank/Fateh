import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Air from './Air';
import Navy from './Navy';
import Army from './Army';

export default createBottomTabNavigator({
    Air: {
      screen: Air,
      navigationOptions: {
        tabBarLabel: 'Air Force',
        tabBarIcon: ({ tintColor }) => (
          <Image source={require('./air.png')} style={{width:35,height:35}}/>
        )
      }
    },
    Navy: {
      screen: Navy,
      navigationOptions: {
        tabBarLabel: 'Navy',
        tabBarIcon: ({ tintColor }) => (
          <Image source={require('./navy.png')} style={{width:35,height:35}}/>
        )
      }
    },
    Army: {
      screen: Army,
      navigationOptions: {
        tabBarLabel: 'Army',
        tabBarIcon: ({ tintColor }) => (
          <Image source={require('./war.png')} style={{width:35,height:35}}/>
        )
      }
    },
   }, {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#6f86d6',
      activeBackgroundColor: '#6f86d6',
      labelStyle:{fontWeight:'700'},
      style: {
        backgroundColor: 'white',
        borderRadius:5,
        margin:3,
        height:50,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 8,
        width:320,
        marginLeft:20,
        borderBottomEndRadius:0,
        borderColor:'#6f86d6'
      }
      }
    })
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  