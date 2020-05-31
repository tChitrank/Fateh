import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SliderBox } from "react-native-image-slider-box";
import DataCard from './dataCard'
import BarChartLegends from './BarLegends'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Navy(props) {
  const [students, setStudents] = useState([
    {
      seriesName: 'series1',
      color: '#297AB1',
      data: [
        {
          x: "2019",
          y: 99.25,
        },
        {
          x: "2018",
          y: 69.26,
        },
        {
          x: "2017",
          y: 81.8,
        },
        {
          x: "2016",
          y: 81.8,
        },
        {
          x: "2015",
          y: 81.8,
        }
      ]
    },
    {
      seriesName: 'series2',
      color: '#87ceeb',
      data: [
        {
          x: "2019",
          y: 99.25,
        },
        {
          x: "2018",
          y: 69.26,
        },
        {
          x: "2017",
          y: 81.8,
        },
        {
          x: "2016",
          y: 81.8,
        },
        {
          x: "2015",
          y: 81.8,
        }
      ]
    }
  ]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>

        <LinearGradient
          colors={['#48c6ef', '#6f86d6']}
          style={{ padding: 15, height: '40%', width: '100%', borderRadius: 5 }}>
          <View style={{ padding: 10, marginTop: 20, flexDirection: 'row' }}>
            <Icon
              style={{ paddingLeft: 6, marginRight: 14, marginTop: 2, color: 'white' }}
              onPress={() => props.navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
            <Text style={{ flex: 1, fontSize: 24, color: 'white', fontWeight: 'bold' }}>Hi {global.FirstName}!</Text>
          </View>
        </LinearGradient>

        <View style={{ flex: 1, margin: 20, marginTop: 20, position: 'absolute', top: 130, width: '90%', height: 420, marginBottom: 80 }}>
          <View style={{
            flex: 1, borderRadius: 12, borderWidth: 0.5,
            backgroundColor: 'white', borderColor: '#d9d9d9', elevation: 2
          }}>
            <ScrollView scrollEventThrottle={20}>
              <View style={{ backgroundColor: "white", padding: 10, flexDirection: 'row', width: '100%' }} />

              <SliderBox images={[
                require('../assets/navy3.jpg'),
                require('../assets/navy2.jpg'),
                require('../assets/navy1.jpg'),

              ]} />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{ fontWeight: '700', fontSize: 22, color: 'grey', padding: 10, textAlign: "center" }}>
                  Number of Students
                                    </Text>
                <BarChartLegends
                  dataWithLabel={students}
                />
              </View>
              <Text
                style={{ fontWeight: '700', fontSize: 22, color: 'grey', textAlign: "center" }}>
                Exams Conducted
                                    </Text>
              <DataCard name={"NDA"}
                vacancy={"42(Twice a year)"}
                date={"Jun and Dec"}
                age={"16 ½ - 19½ "}
                qualification={"10+2(PCM)"}
                colorCutoff={'#a5deba'}
                married={"Un married"} 
                cutoff={"342/900"}/>

<DataCard name={"NA"}
                vacancy={"48(Twice a year)"}
                date={"Jun and Dec"}
                age={"16 ½ - 19½ "}
                qualification={"10+2(PCM)"}
                colorCutoff={'#a5deba'}
                married={"Un married"}
                cutoff={"342/900"} />

<DataCard name={"TES 10+2"}
                vacancy={"90(Twice a year)"}
                date={"May/Jun and Oct/Nov"}
                age={"16 ½ - 19½ "}
                colorCutoff={'white'}
                qualification={"10+2(PCM) & JEE"}
                married={"Un married"} />

<DataCard name={"INET Executive Branch"}
                vacancy={"55(Men & Women)"}
                date={"May"}
                age={"19 - 24"}
                qualification={"BE/BTECH"}
                colorCutoff={'#a5deba'}
                married={"Un married"} 
                cutoff={"80/400"}/>

<DataCard name={"INET Technical"}
                vacancy={"48"}
                date={"May"}
                age={"19 - 24"}
                qualification={"BE/BTECH"}
                married={"Un married"} 
                colorCutoff={'#a5deba'}
                cutoff={"80/400"}/>

<DataCard name={"INET Education Branch"}
                vacancy={"18"}
                date={"May"}
                age={"19 - 24"}
                qualification={"Msc/BE/BTECH"}
                colorCutoff={'#a5deba'}
                married={"Un married"} 
                cutoff={"80/400"}/>

<DataCard name={"SSR"}
                vacancy={"2700"}
                date={"Jun"}
                age={"22 - 24"}
                qualification={"10+2(PCM)"}
                colorCutoff={'white'}
                married={"Un married"} />

            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}