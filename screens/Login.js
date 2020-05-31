import React, { Component } from 'react';
import {  View, Button, Image, SafeAreaView,TextInput,StyleSheet,TouchableOpacity ,Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'
import {StackNavigator} from 'react-navigation'
import { TextField } from 'react-native-material-textfield';

export default class Login extends Component{
    constructor(props){  
        super(props);  
       // global.Token="";
        this.state = {  
             username: '',
             password: 0,  
             loading:false
          } }

          getRef = (ref) => {
            if (this.props.getRef)
                this.props.getRef(ref)
        }

          login=()=>{
            global.FirstName=this.state.username
            console.log("user",global.FirstName)
            console.log("pass",this.state.password);
            if(this.state.username==="" || this.state.password<=16 || this.state.password>=50 ){
              alert("Enter a valid Username and Age")
            }
            else{
              this.props.navigation.navigate("Profile")
            }
          }
          
    render(){
    return(
        <SafeAreaView style={{flex:1}}>
    <View style={{flex:1}}>


   
     
    <View style={styles.container}>
    <Image
                     //style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    source={require('../assets/fateh.png')}
                  />
                <TextField
                         containerStyle={{ width: '80%' }}
                        label='Username'
                        tintColor="#008fff"
                        baseColor='#0e3ee1'
                        value={this.state.username}
                        onChangeText={(username) => this.setState({ username })}
                    />
                     <TextField
                         containerStyle={{ width: '80%' }}
                        label='Age'
                        tintColor="#008fff"
                        baseColor='#0e3ee1'
                        value={this.state.username}
                        onChangeText={(password) => this.setState({password })}
                    />
   
      <View style={{marginTop:30}}>
       <TouchableOpacity  onPress={this.login}> 
    <LinearGradient
      colors={['#48c6ef', '#6f86d6']}
      style={{ padding: 15, borderRadius: 18,height:60,width:120 }}>
        <Text style={{color:'white',fontWeight:'700',fontSize:20,textAlign:'center'}}> Login </Text>
        </LinearGradient>
        </TouchableOpacity>
         </View>    
      </View></View>
      
      
      </SafeAreaView>
    );
}}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height:'100%',
      width:'100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12, borderWidth: 0.5, 
          backgroundColor: 'white', borderColor: '#d9d9d9', elevation: 2
    },
  });