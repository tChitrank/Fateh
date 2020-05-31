import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'

export default function VideoSupport(props) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <LinearGradient
                    colors={['#48c6ef', '#6f86d6']}
                    style={{ padding: 15, height: '100%', width: '100%', borderRadius: 5 }}>
                    <View style={{ flex: 1 }}>

                        <TouchableOpacity style={{ flexDirection:'row', margin: 10 }}
                            onPress={() => {
                                props.navigation.navigate('Profile');
                            }}>
                                 <Text style={{ flex:1,color: 'white', fontSize: 30,fontWeight:'700'}}>Study Material
                                 </Text>
                            <View style={{
                                height: 50, width: 50, borderRadius: 25,
                                backgroundColor: 'white', alignItems: 'center',
                                justifyContent: 'center', elevation: 5
                            }}>
                                <Text style={{ color: '#4CA1AF', fontSize: 30 }}>x</Text>
                            </View>
                        </TouchableOpacity>

                        <ScrollView>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'space-around' }}>
                                    <TouchableOpacity onPress={() => { Linking.openURL('https://www.youtube.com/channel/UC3KWvbV_7KY7_epXmfksD2A/featured') }}>
                                        <View style={{
                                            margin: 10, borderWidth: 1, borderColor: '#D21900', backgroundColor: '#ffffff', borderRadius: 8,
                                            height: 150, width: 160, alignItems: 'center', justifyContent: 'center', elevation: 4, marginLeft: 0
                                        }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={require('../assets/Wifistudy.jpg')} style={{ width: 40, height: 40 }} />
                                                <Text style={{ color: 'grey', fontWeight: '700', marginTop: 5, fontSize: 16 }}>Wifi Study {'\n'}Defence Exams</Text>
                                            </View>
                                            <Image source={require('../assets/youtube.png')} style={{ width: 55, height: 55 }} />
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => { Linking.openURL('https://www.youtube.com/channel/UCTX04M-bmHGoCZblwRhmUuQ') }}>
                                        <View style={{
                                            margin: 10, borderWidth: 1, borderColor: '#D21900', backgroundColor: '#ffffff', borderRadius: 8,
                                            height: 150, width: 160, alignItems: 'center', justifyContent: 'center', elevation: 4, marginLeft: 0
                                        }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={require('../assets/letscrack.jpg')} style={{ width: 40, height: 40 }} />
                                                <Text style={{ color: 'grey', fontWeight: '700', marginTop: 5, fontSize: 16 }}>Let's Crack{'\n'}Defence Exams</Text>
                                            </View>
                                            <Image source={require('../assets/youtube.png')} style={{ width: 55, height: 55 }} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'space-around' }}>
                                    <TouchableOpacity onPress={() => { Linking.openURL('https://www.youtube.com/channel/UCQP034vzXl_T_UXNo8uGQyA') }}>
                                        <View style={{
                                            margin: 10, borderWidth: 1, borderColor: '#D21900', backgroundColor: '#ffffff', borderRadius: 8,
                                            height: 150, width: 160, alignItems: 'center', justifyContent: 'center', elevation: 4, marginLeft: 0
                                        }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={require('../assets/dde.jpg')} style={{ width: 40, height: 40,marginRight:4,marginTop:4 }} />
                                                <Text style={{ color: 'grey', fontWeight: '700', marginTop: 5, fontSize: 16 }}>Defence Direct{'\n'}Education</Text>
                                            </View>
                                            <Image source={require('../assets/youtube.png')} style={{ width: 55, height: 55 }} />
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => { Linking.openURL('https://www.youtube.com/results?search_query=Defence+Squad') }}>
                                        <View style={{
                                            margin: 10, borderWidth: 1, borderColor: '#D21900', backgroundColor: '#ffffff', borderRadius: 8,
                                            height: 150, width: 160, alignItems: 'center', justifyContent: 'center', elevation: 4, marginLeft: 0
                                        }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={require('../assets/defsquad.jpg')} style={{ width: 40, height: 40 }} />
                                                <Text style={{ color: 'grey', fontWeight: '700', marginTop: 5, fontSize: 16 }}> Defence Squad</Text>
                                            </View>
                                            <Image source={require('../assets/youtube.png')} style={{ width: 55, height: 55 }} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'space-around' }}>
                                    <TouchableOpacity onPress={() => { Linking.openURL('https://www.youtube.com/user/SSBInterview') }}>
                                        <View style={{
                                            margin: 10, borderWidth: 1, borderColor: '#D21900', backgroundColor: '#ffffff', borderRadius: 8,
                                            height: 150, width: 160, alignItems: 'center', justifyContent: 'center', elevation: 4, marginLeft: 0
                                        }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={require('../assets/ssbcrack.jpg')} style={{ width: 40, height: 40,marginRight:8 }} />
                                                <Text style={{ color: 'grey', fontWeight: '700', marginTop: 5, fontSize: 16 }}> SSB Crack</Text>
                                            </View>
                                            <Image source={require('../assets/youtube.png')} style={{ width: 55, height: 55 }} />
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => { Linking.openURL('https://www.youtube.com/channel/UCOkywXyXAPDP3E_aykq0XFQ') }}>
                                        <View style={{
                                            margin: 10, borderWidth: 1, borderColor: '#D21900', backgroundColor: '#ffffff', borderRadius: 8,
                                            height: 150, width: 160, alignItems: 'center', justifyContent: 'center', elevation: 4, marginLeft: 0
                                        }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={require('../assets/exampur.jpg')} style={{ width: 40, height: 40,marginRight:4 }} />
                                    <Text style={{ color: 'grey', fontWeight: '700', marginTop: 5, fontSize: 16 }}>Examपुर {"\n"}Def. Warriors</Text>
                                            </View>
                                            <Image source={require('../assets/youtube.png')} style={{ width: 55, height: 55 }} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'space-around' }}>
                                    <TouchableOpacity onPress={() => { Linking.openURL('https://www.youtube.com/channel/UCZNtwUp_lzZ6ZoxFGpait1w') }}>
                                        <View style={{
                                            margin: 10, borderWidth: 1, borderColor: '#D21900', backgroundColor: '#ffffff', borderRadius: 8,
                                            height: 150, width: 160, alignItems: 'center', justifyContent: 'center', elevation: 4, marginLeft: 0
                                        }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={require('../assets/defencegyan.jpg')} style={{ width: 40, height: 40 ,marginRight:8}} />
                                    <Text style={{ color: 'grey', fontWeight: '700', marginTop: 5, fontSize: 16 }}>Defence{"\n"}Gyan.com</Text>
                                            </View>
                                            <Image source={require('../assets/youtube.png')} style={{ width: 55, height: 55 }} />
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => { Linking.openURL('https://www.youtube.com/user/majorkalshiclasses') }}>
                                        <View style={{
                                            margin: 10, borderWidth: 1, borderColor: '#D21900', backgroundColor: '#ffffff', borderRadius: 8,
                                            height: 150, width: 160, alignItems: 'center', justifyContent: 'center', elevation: 4, marginLeft: 0
                                        }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={require('../assets/major.jpg')} style={{ width: 40, height: 40,marginRight:4 }} />
                                    <Text style={{ color: 'grey', fontWeight: '700', marginTop: 5, fontSize: 16 }}>Major Kalshi{"\n"}Classes Pvt. Ltd</Text>
                                            </View>
                                            <Image source={require('../assets/youtube.png')} style={{ width: 55, height: 55 }} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'space-around' }}>
                                    <TouchableOpacity onPress={() => { Linking.openURL('https://www.youtube.com/channel/UC-PLG1ENeQbKbmhNPdYn3Ww') }}>
                                        <View style={{
                                            margin: 10, borderWidth: 1, borderColor: '#D21900', backgroundColor: '#ffffff', borderRadius: 8,
                                            height: 150, width: 160, alignItems: 'center', justifyContent: 'center', elevation: 4, marginLeft: 0
                                        }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={require('../assets/govt.jpg')} style={{ width: 40, height: 40 ,marginRight:8}} />
                                    <Text style={{ color: 'grey', fontWeight: '700', marginTop: 5, fontSize: 16 }}>Government{"\n"}Funda</Text>
                                            </View>
                                            <Image source={require('../assets/youtube.png')} style={{ width: 55, height: 55 }} />
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => { Linking.openURL('https://www.youtube.com/channel/UCrGow2eP8UTMyUxf0Xdfzlg') }}>
                                        <View style={{
                                            margin: 10, borderWidth: 1, borderColor: '#D21900', backgroundColor: '#ffffff', borderRadius: 8,
                                            height: 150, width: 160, alignItems: 'center', justifyContent: 'center', elevation: 4, marginLeft: 0
                                        }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={require('../assets/gradeup.jpg')} style={{ width: 40, height: 40,marginRight:4 }} />
                                    <Text style={{ color: 'grey', fontWeight: '700', marginTop: 5, fontSize: 16 }}>Gradeup:CDS,{"\n"}NDA</Text>
                                            </View>
                                            <Image source={require('../assets/youtube.png')} style={{ width: 55, height: 55 }} />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'space-around' }}>
                                    <TouchableOpacity onPress={() => { Linking.openURL('https://www.youtube.com/channel/UCSrDe6ZsresHsA7ApTY-Sdw') }}>
                                        <View style={{
                                            margin: 10, borderWidth: 1, borderColor: '#D21900', backgroundColor: '#ffffff', borderRadius: 8,
                                            height: 150, width: 160, alignItems: 'center', justifyContent: 'center', elevation: 4, marginLeft: 0
                                        }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={require('../assets/self.jpg')} style={{ width: 40, height: 40 ,marginRight:8}} />
                                    <Text style={{ color: 'grey', fontWeight: '700', marginTop: 5, fontSize: 16 }}>Self Selection{"\n"}Board</Text>
                                            </View>
                                            <Image source={require('../assets/youtube.png')} style={{ width: 55, height: 55 }} />
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => { Linking.openURL('https://www.youtube.com/channel/UCFwUq7CTsTeMasNV1DTupGA') }}>
                                        <View style={{
                                            margin: 10, borderWidth: 1, borderColor: '#D21900', backgroundColor: '#ffffff', borderRadius: 8,
                                            height: 150, width: 160, alignItems: 'center', justifyContent: 'center', elevation: 4, marginLeft: 0
                                        }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={require('../assets/arpit.jpg')} style={{ width: 40, height: 40,marginRight:4 }} />
                                    <Text style={{ color: 'grey', fontWeight: '700', marginTop: 5, fontSize: 16 }}>Arpit{"\n"}Choudhary</Text>
                                            </View>
                                            <Image source={require('../assets/youtube.png')} style={{ width: 55, height: 55 }} />
                                        </View>
                                    </TouchableOpacity>
                                </View>


                            </View>
                        </ScrollView>
                    </View>
                </LinearGradient>






            </View>
        </SafeAreaView>)
}