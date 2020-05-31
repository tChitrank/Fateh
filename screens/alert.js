import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'

export default function alertScreen(props) {
    return(
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
        <LinearGradient
        colors={['#48c6ef', '#6f86d6']}
      style={{ padding: 15, height: '100%', width: '100%', borderRadius: 5 }}>
                            <View style={{flex:1}}>
        <TouchableOpacity style={{flexDirection:'row', margin:10}} 
        onPress={() => {
                                props.navigation.navigate('Profile');
                            }}>
                                  <Text style={{ flex:1,color: 'white', fontSize: 30,fontWeight:'700'}}>Notifications</Text>
                                <View style={{
                                    height: 50, width: 50, borderRadius: 25,
                                    backgroundColor: 'white', alignItems: 'center', 
                                    justifyContent: 'center',elevation:5
                                }}>
                                    <Text style={{ color: '#4CA1AF', fontSize: 30 }}>x</Text>
                                </View>
                            </TouchableOpacity>
                            
                            <ScrollView  scrollEventThrottle={40}>
                            <View style={{backgroundColor:'white',margin:15,marginBottom:2,
                            marginTop:35,width:'90%',height:120,borderRadius:15,elevation:5,
                            borderLeftWidth:4,borderLeftColor:'#deada5',
                            justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:11,marginTop:10,marginLeft:4}}>
                               AS INTIMATED BY MEDICAL AUTHORITIES DGMS (ARMY) ALL APPEAL MEDICAL BOARD (AMB) OF SELECTED CANDIDATES ARE POSTPONED TILL 30 APR 2020. 
                                VISIT https://joinindianarmy.nic.in/ for more details.</Text>
                                <Image source={require('./war.png')} 
                                style={{flex:1,marginLeft:20,width:55,height:55,resizeMode:'contain',alignSelf:'flex-end',marginRight:5}}/>
                            </View>

                           
                            <View style={{backgroundColor:'white',margin:15,marginBottom:2,
                            marginTop:35,width:'90%',height:160,borderRadius:15,elevation:5,
                            borderLeftWidth:4,borderLeftColor:'#deada5',
                            justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:11,marginTop:10,marginLeft:4}}>
                                REPORTING OF SSC (APR 2020) COURSE (MEN - WOMEN) : AS PER COVID -19 (CORONA VIRUS) ADVISORY, 
                                REPORTING DATE OF CANDIDATES OF SSC (NT) - 111, SSC (TECH) - 54, SSCW (NT - TECH) - 25,
                                 SSC (NCC) SPL (MEN - WOMEN) - 47, 
                                SSC (JAG) (MEN - WOMEN) - 24 IS DEFERRED TILL FURTHER ORDERS. VISIT "https://joinindianarmy.nic.in/" for more details.
                              </Text>
                                <Image source={require('./war.png')} 
                                style={{flex:1,marginLeft:20,width:55,height:55,resizeMode:'contain',alignSelf:'flex-end',marginRight:5}}/>
                            </View>

                            <View style={{backgroundColor:'white',margin:15,marginBottom:2,
                            marginTop:35,width:'90%',height:120,borderRadius:15,elevation:5,
                            borderLeftWidth:4,borderLeftColor:'#deada5',
                            justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:11,marginTop:10,marginLeft:4}}>
                                ALL SSB SCHEDULED FROM 20 MAR 2020 ONWARDS ARE SUSPENDED DUE TO COVID – 19 (CORONA VIRUS) ADVISORY.
                                 FRESH DATES WILL BE INTIMATED LATER.
                                   VISIT "https://joinindianarmy.nic.in/" for more details.</Text>
                                <Image source={require('./war.png')} 
                                style={{flex:1,marginLeft:20,width:55,height:55,resizeMode:'contain',alignSelf:'flex-end',marginRight:5}}/>
                            </View>
                            
                            <View style={{backgroundColor:'white',margin:15,marginBottom:2,
                            marginTop:35,width:'90%',height:140,borderRadius:15,elevation:5,
                            borderLeftWidth:4,borderLeftColor:'#deada5',
                            justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:11,marginTop:10,marginLeft:4}}>
                                In view of the outbreak of COVID-19, various government advisories and lock down in the country, 
                                STAR 01/2020 online exam scheduled from 19 - 23 Mar 20 was postponed. 
                                Fresh dates will be intimated in the second week of May 2020.
                                 Visit "https://airmenselection.cdac.in/" for more details.</Text>
                                <Image source={require('./air.png')} 
                                style={{flex:1,marginLeft:20,width:55,height:55,resizeMode:'contain',alignSelf:'flex-end',marginRight:5}}/>
                            </View>

                            <View style={{backgroundColor:'white',margin:15,marginBottom:2,
                            marginTop:35,width:'90%',height:140,borderRadius:15,elevation:5,
                            borderLeftWidth:4,borderLeftColor:'#deada5',
                            justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:11,marginTop:10,marginLeft:4}}>
                                VARIOUS ARMY RECT RALLIES PLANNED TO BE CONDUCTED AT DIFFERENT LOCATIONS HAS BEEN POSTPONED DUE TO COVID-19 
                                (CORONA VIRUS) ADVISORY. FRESH DATES WILL BE INTIMATED LATER.
                                 REGISTRATION ALREADY DONE REMAINS VALID. VISIT "https://joinindianarmy.nic.in/" for more details.</Text>
                                <Image source={require('./war.png')} 
                                style={{flex:1,marginLeft:20,width:55,height:55,resizeMode:'contain',alignSelf:'flex-end',marginRight:5}}/>
                            </View>

                            <View style={{backgroundColor:'white',margin:15,marginBottom:2,
                            marginTop:35,width:'90%',height:120,borderRadius:15,elevation:5,
                            borderLeftWidth:4,borderLeftColor:'#deada5',
                            justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:11,marginTop:10,marginLeft:4}}>
                                Due to COVID-19, AFSB Dehradun, Varanasi, Mysore, Gandhinagar have cancelled 
                                their AFSB interview for all the aspirants.
                                 The link to select AFSB Interview date is blocked.
                               </Text>
                                <Image source={require('./air.png')} 
                                style={{flex:1,marginLeft:20,width:55,height:55,resizeMode:'contain',alignSelf:'flex-end',marginRight:5}}/>
                            </View>

                            <View style={{backgroundColor:'white',margin:15,marginBottom:2,
                            marginTop:35,width:'90%',height:120,borderRadius:15,elevation:5,
                            borderLeftWidth:4,borderLeftColor:'#deada5',
                            justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:11,marginTop:10,marginLeft:4}}>
                                NDA 2020 Examination scheduled to be held on 19th April 2020 has been postponed. 
                                New dates will be announced soon. Visit "https://upsc.gov.in/" for more details.
                               </Text>
                                <Image source={require('./war.png')} 
                                style={{flex:1,marginLeft:20,width:55,height:55,resizeMode:'contain',alignSelf:'flex-end',marginRight:5}}/>
                            </View>

                            <View style={{backgroundColor:'white',margin:15,marginBottom:2,
                            marginTop:35,width:'90%',height:120,borderRadius:15,elevation:5,
                            borderLeftWidth:4,borderLeftColor:'#deada5',
                            justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:11,marginTop:10,marginLeft:4}}>
                                AFCAT 1 result 2020 for online test has been announced by Indian Air Force on March 17.
                                 AFCAT result link is available on the candidate's dashboard. Visit "https://afcat.cdac.in".
                               </Text>
                                <Image source={require('./air.png')} 
                                style={{flex:1,marginLeft:20,width:55,height:55,resizeMode:'contain',alignSelf:'flex-end',marginRight:5}}/>
                            </View>

                            <View style={{backgroundColor:'white',margin:15,marginBottom:2,
                            marginTop:35,width:'90%',height:120,borderRadius:15,elevation:5,
                            borderLeftWidth:4,borderLeftColor:'#deada5',
                            justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:11,marginTop:10,marginLeft:4}}>
                                SSC (TECH) -55 (OCT 2020) COURSE - CUT OFF 
                                PERCENTAGE FOR SSB SHORTLISTING RELEASED VISIT "https://joinindianarmy.nic.in/".
                               </Text>
                                <Image source={require('./war.png')} 
                                style={{flex:1,marginLeft:20,width:55,height:55,resizeMode:'contain',alignSelf:'flex-end',marginRight:5}}/>
                            </View>

                            <View style={{backgroundColor:'white',margin:15,marginBottom:2,
                            marginTop:35,width:'90%',height:120,borderRadius:15,elevation:5,
                            borderLeftWidth:4,borderLeftColor:'#deada5',
                            justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:11,marginTop:10,marginLeft:4}}>
                                TGC-131 (JUL 2020) COURSE - CUT OFF PERCENTAGE FOR SSB SHORTLISTING 
                                RELEASED VISIT "https://joinindianarmy.nic.in/".
                               </Text>
                                <Image source={require('./war.png')} 
                                style={{flex:1,marginLeft:20,width:55,height:55,resizeMode:'contain',alignSelf:'flex-end',marginRight:5}}/>
                            </View>

                            <View style={{backgroundColor:'white',margin:15,marginBottom:2,
                            marginTop:35,width:'90%',height:120,borderRadius:15,elevation:5,
                            borderLeftWidth:4,borderLeftColor:'#deada5',
                            justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:11,marginTop:10,marginLeft:4}}>
                                SSCW(TECH)-26 (OCT 2020) COURSE - CUT OFF PERCENTAGE FOR SSB SHORTLISTING
                                 RELEASED VISIT "https://joinindianarmy.nic.in/".
                               </Text>
                                <Image source={require('./war.png')} 
                                style={{flex:1,marginLeft:20,width:55,height:55,resizeMode:'contain',alignSelf:'flex-end',marginRight:5}}/>
                            </View>
                            
                            </ScrollView>
                            </View>
                           
                         </LinearGradient> 
        </View>
        </SafeAreaView>
    );
}