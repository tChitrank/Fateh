import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions,
  TextInput,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';

function cacheImages(images) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }
const { width, height } = Dimensions.get('window');

const {
  Value,event,block,cond,eq,set,Clock,startClock,stopClock,debug,timing,clockRunning,interpolate,Extrapolate
} = Animated;

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position
  ]);
}
export default class LoginNew extends Component {
  constructor() {
    super();
    this.state = {
        isReady: false,
        username:""
      };

      
    this.buttonOpacity = new Value(1);

    this.onStateChange = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
            )
          ])
      }
    ]);
    this.onCloseState = event([
        {
          nativeEvent: ({ state }) =>
            block([
              cond(
                eq(state, State.END),
                set(this.buttonOpacity, runTiming(new Clock(), 0, 1))
              )
            ])
        }
      ]);

    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 3, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputZindex=interpolate(this.buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [1,-1],
        extrapolate: Extrapolate.CLAMP
      });
      this.textInputY=interpolate(this.buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [0,100],
        extrapolate: Extrapolate.CLAMP
      });
      this.textInputOpacity=interpolate(this.buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [1,0],
        extrapolate: Extrapolate.CLAMP
      });
  }
  
  async _loadAssetsAsync() {
    const imageAssets = cacheImages([require('./air.png')]);

    await Promise.all([...imageAssets]);
  }
  render() {
    if (!this.state.isReady) {
        return (
          <AppLoading
            startAsync={this._loadAssetsAsync}
            onFinish={() => this.setState({ isReady: true })}
            onError={console.warn}
          />
        );
      }
    return (
      <KeyboardAvoidingView style={{flex: 1,
        backgroundColor:'#C4E0E5'}} behavior="padding" enabled>
      <View
        style={{
          flex: 1,justifyContent:'flex-end',backgroundColor:'white'
        }}
      >
        <Animated.View
          style={{
            ...StyleSheet.absoluteFill,
            transform: [{ translateY: this.bgY }]
          }}
        >
           <LinearGradient
      colors={['#fc00ff', '#00dbde']}
      style={{ padding: 15, height: '100%', width: '100%' }}></LinearGradient>
        </Animated.View>
        <View style={{ height: height / 3, justifyContent: 'center' }}>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: this.buttonOpacity,
                transform: [{ translateY: this.buttonY }]
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SIGN IN</Text>
            </Animated.View>
          </TapGestureHandler>
          
          <Animated.View style={{
              zIndex:this.textInputZindex,
              opacity:this.textInputOpacity,
              transform:[{translateY:this.textInputY}],
              height:height/3,
        ...StyleSheet.absoluteFill,top:null,justifyContent:'center'}}>
            <TapGestureHandler onHandlerStateChange={this.onCloseState}>
                <Animated.View style={styles.closeButton}>
                    <Animated.Text style={{fontSize:15}}>X
                        </Animated.Text>
                </Animated.View>
            </TapGestureHandler >
            <TextInput placeholder='Username' style={styles.textInput}
            placeholderTextColor="black"
            onChangeText={(username)=>{this.setState({username})
            //global.Firstname=this.state.username
            console.log("username",global.Firstname)}}/>
             
            <Animated.View style={styles.button}>
                <TouchableOpacity  onPress={() => {
        this.props.navigation.navigate('Profile');}}>
                 <LinearGradient
       colors={['#4CA1AF', '#C4E0E5']}
      style={{ padding: 15, borderRadius: 18,height:60,width:120 }}>
        <Text style={{color:'white',fontWeight:'700',fontSize:20,textAlign:'center'}}> SIGN IN </Text>
        </LinearGradient>
                </TouchableOpacity>
                </Animated.View>
              </Animated.View>
            
        </View>
      </View>
      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeButton:{
    height:40,
    width:40,
    backgroundColor:'white',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top:-20,
    left:width/2-20,
    shadowOffset:{width:2,height:2},
    shadowColor:'black',
    shadowOpacity:0.2
  },
  button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    shadowOffset:{width:2,height:2},
    shadowColor:'black',
    shadowOpacity:0.2
  },
  textInput:{
      height:50,
      borderRadius:25,
      borderWidth:2,
      marginHorizontal:20,
      paddingLeft:10,
      marginVertical:5,
      borderColor:"rgba(0,0,0,0.2)"
  }
});