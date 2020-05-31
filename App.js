import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,Button,AsyncStorage } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import LoginNew from './screens/LoginNew'
import VideoSupport from './screens/VideoSupport'
import Login from './screens/Login'
import Profile from './screens/Profile'
import alertScreen from './screens/alert'
import CustomDrawerComponent from './screens/DrawerNavigator/CustomDrawerComponent'
import Icon from 'react-native-vector-icons/Ionicons'

const App = () => <AppContainer />;

const LoginStackNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
});

const FatehNavigator = createDrawerNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Home',
        drawerIcon: () =>  <Icon name="ios-home"  size={24} />
      }
    },
    VideoSupport: {
      screen: VideoSupport,
      navigationOptions: {
        title: 'Study Material',
        drawerIcon: () => <Icon name="ios-notifications" size={24} />
      }
    },
    alertScreen: {
      screen: alertScreen,
      navigationOptions: {
        title: 'Notifications',
        drawerIcon: () => <Icon name="ios-notifications" size={24} />
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Logout',
        drawerIcon: () =>  <Icon name="md-log-out" size={24} style={styles.icon,{marginLeft:2}} color="red"/>
      }
    },
  },
  {
    contentComponent: CustomDrawerComponent
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  LoginStackNavigator,
  FatehNavigator,
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
