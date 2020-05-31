import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SliderBox } from "react-native-image-slider-box";
import BarChartLegends from './BarLegends'
import DataCard from './dataCard'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Army(props) {
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
                require('../assets/army1.jpg'),
                require('../assets/army2.jpg'),
                require('../assets/army3.jpg'),

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
                vacancy={"208(Twice a year)"}
                date={"Jun and Dec"}
                age={"16 ½ - 19½ "}
                qualification={"10+2(PCM)"}
                colorCutoff={'#a5deba'}
                married={"Un married"} 
                cutoff={"342/900"}/>

              <DataCard name={"TES 10+2"}
                vacancy={"90(Twice a year)"}
                date={"May/Jun and Oct/Nov"}
                age={"16 ½ - 19½ "}
                colorCutoff={'white'}
                qualification={"10+2(PCM)"}
                married={"Un married"} />

              <DataCard name={"IMA Graduate UPSC"}
                vacancy={"200(Twice a year)"}
                date={"Jul and Nov"}
                age={"19 - 24 "}
                qualification={"Graduation"}
                colorCutoff={'#a5deba'}
                married={"Un married"} 
                cutoff={"116/300"}/>

              <DataCard name={"SSCW(Women only)"}
                vacancy={"12(Twice a year)"}
                date={"Jul and Nov"}
                age={"19 - 25"}
                colorCutoff={'white'}
                qualification={"Graduation"}
                married={"Un married"} />

              <DataCard name={"OTA SCC(Non Technical)"}
                vacancy={"175(Twice a year)"}
                date={"Jul and Nov"}
                age={"19 - 25 "}
                colorCutoff={'#a5deba'}
                qualification={"Graduation"}
                married={"Un married"} 
                cutoff={"78/200"}/>

              <DataCard name={"SSC JAG"}
                vacancy={"10(Twice a year)"}
                date={"Jul/Aug and Jan/Feb"}
                age={"21 - 27 "}
                qualification={"55% in LLB"}
                colorCutoff={'white'}
                married={"Un married"} />

              <DataCard name={"SSCW JAG(Women only)"}
                vacancy={"4(Twice a year)"}
                date={" Jul/Aug and Jan/Feb"}
                age={"21 - 27"}
                qualification={"55% in LLB"}
                colorCutoff={'#a5deba'}
                married={"Un married"} 
                cutoff={"78/200"}/>

              <DataCard name={"SSC NCC"}
                vacancy={"50(Twice a year)"}
                date={"Jun and Dec"}
                colorCutoff={'white'}
                age={"19 - 25 "}
                qualification={'Graduation + NCC'}
                married={"Un married"} />

              <DataCard name={"SSCW NCC(Women only)"}
                vacancy={"4(Twice a year)"}
                date={"Jun and Dec"}
                age={"19 - 25 "}
                qualification={'Graduation + NCC'}
                colorCutoff={'#a5deba'}
                married={"Un married"} 
                cutoff={"78/200"}/>

              <DataCard name={"UES"}
                vacancy={"60(Once a year)"}
                date={"Jun/Jul"}
                age={"18 - 24 "}
                colorCutoff={'white'}
                qualification={'Pre Final Year' + '\n' + 'Engineering' + '\n' + 'students'}
                married={"Unmarried"} />

              <DataCard name={"TGC"}
                vacancy={"60(Once a year)"}
                date={"Mar/Apr and Sep/Oct"}
                age={"20 - 27 "}
                colorCutoff={'white'}
                qualification={"BE/BTECH"}
                married={"Unmarried"} />

              <DataCard name={"SSC Technical"}
                vacancy={"100(Twice a year)"}
                colorCutoff={'white'}
                date={"Jun / Jul and Dec/Jan"}
                age={"20 - 27 "}
                qualification={"BE/BTECH"}
                married={"Unmarried"} />

              <DataCard name={"Short Service Commission (Technical) Women"}
                vacancy={"20(Twice a year)"}
                date={"Jun / Jul and Dec/Jan"}
                colorCutoff={'white'}
                age={"20 - 27 "}
                qualification={"BE/BTECH"}
                married={"Unmarried"} />

              <DataCard name={"AEC"}
                vacancy={"20(Twice a year)"}
                date={"Mar/Apr and Sep/Oct"}
                colorCutoff={'white'}
                age={"23 - 27 "}
                qualification={"MA/MSC"}
                married={"For Both"} />

              <DataCard name={"ACC"}
                vacancy={"75(Twice a year)"}
                date={"Mar and Aug"}
                age={"20 - 27 "}
                qualification={"10+2 & ACC Test"}
                colorCutoff={'white'}
                married={"For Both"} />

              <DataCard name={"PC(SL)"}
                vacancy={"100(Once a year)"}
                date={"Apr and Jul"}
                age={"Max Age 42"}
                colorCutoff={'white'}
                qualification={"Matric & Abv."}
                married={"For Both"} />

              <DataCard name={"SCO"}
                vacancy={"100(Twice a year)"}
                date={"Apr and Jul"}
                age={"30 - 35"}
                colorCutoff={'white'}
                qualification={"Matric + Dip. & Abv."}
                married={"For Both"} />



            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}