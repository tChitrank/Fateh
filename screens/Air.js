import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SliderBox } from "react-native-image-slider-box";
import DataCard from './dataCard'
import BarChartLegends from './BarLegends'
import Icon from 'react-native-vector-icons/Ionicons'
import { onDidFailWithError } from 'expo/build/AR';

export default function Air(props) {
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
            <ScrollView >
              <View style={{ backgroundColor: "white", padding: 10, flexDirection: 'row', width: '100%' }} />

              <SliderBox images={[
                require('../assets/air3.jpg'),
                require('../assets/air2.jpg'),
                require('../assets/air1.jpg'),

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
                vacancy={"70(Twice a year)"}
                date={"Jun and Dec"}
                age={"16 ½ - 19½ "}
                qualification={"10+2(PCM)"}
                married={"Un married"} 
                colorCutoff={'#a5deba'}
                cutoff={"342/900"}/>

              <DataCard name={"CDS"}
                vacancy={"32"}
                date={"Jul and Nov"}
                age={"19 - 24"}
                qualification={"Graduation"}
                colorCutoff={'#a5deba'}
                married={"Un married"}
                cutoff={"129/300"} />

              <DataCard name={"AFCAT-Flying"}
                vacancy={"60(Men & Women)"}
                date={"Jul and Dec"}
                age={"20 - 24"}
                qualification={"Graduation"}
                colorCutoff={'#a5deba'}
                married={"Un married"}
                cutoff={"133/300"} />

              <DataCard name={"AFCAT-Ground Duty(Technical)"}
                vacancy={"105(Men & Women)"}
                date={"Jul and Dec"}
                age={"20 - 26"}
                qualification={"Aeronautical Engg."}
                colorCutoff={'#a5deba'}
                married={"Un married"} 
                cutoff={"133/300"}/>

              <DataCard name={"AFCAT-Ground Duty(Non Technical)"}
                vacancy={"84(Men & Women)"}
                date={"Jul and Dec"}
                age={"20 - 26"}
                qualification={"Administration, Accts."}
                colorCutoff={'#a5deba'}
                married={"Un married"} 
                cutoff={"133/300"}/>

              <DataCard name={"NCC Special Entry(Flying)"}
                vacancy={"10% seats out of CDSE & AFCAT"}
                date={"Jul and Dec"}
                age={"19 - 24"}
                qualification={"Graduation"}
                colorCutoff={'#a5deba'}
                married={"Un married"} 
                cutoff={"133/300"}/>

            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>

  );
}