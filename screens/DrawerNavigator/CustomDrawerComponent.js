import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
  TouchableOpacity,Image,AsyncStorage
} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient';

class CustomDrawerNavigator extends Component {
  
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={{flexDirection:'column' }} />
        <LinearGradient
        colors={['#fff','#ffff']} style={{
        height: 150,
        backgroundColor: '#2E424D',
        alignItems: 'center',
        marginTop:20,
        justifyContent: 'center',
        paddingTop: Platform.OS == 'android' ? 20 : 0
      }}>
         <Image source={require('../../assets/fateh.png')}
          style={{ width: 145, height: 145, resizeMode: 'contain' }} />
          </LinearGradient>
        
        <DrawerItems {...this.props} />
        <TouchableOpacity onPress={async () => {          
          this.props.navigation.navigate('LoginNew')
       }}>
    </TouchableOpacity>
      </ScrollView>
    );
  }
}
export default CustomDrawerNavigator;

