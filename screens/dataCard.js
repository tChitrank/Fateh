import React from 'react'
import PureChart from 'react-native-pure-chart';
import { View, Dimensions, Text } from 'react-native'

const DataCard = props => {
    return ( 
    <View style={{
        flexDirection: 'row', backgroundColor: 'white', margin: 15, marginBottom: 2,
        marginTop: 5, width: '90%', height: 170, borderRadius: 15, elevation: 5,
        borderLeftWidth: 2, borderLeftColor: '#deada5',
        justifyContent: 'center', alignItems: 'center'
      }}>
        <View style={{ flex: 2, flexDirection: 'column',marginLeft:4 }}>
    <Text style={{ fontSize: 16, marginTop: 8 ,color:'#deada5',fontWeight:'700'}}>{props.name}</Text>
    <Text style={{ fontSize: 14, color: 'grey' }}>Vacancy- {props.vacancy}</Text>
    <Text style={{ fontSize: 14, color: 'grey' }}>Tentative Dates- {props.date}</Text>
          <Text style={{ fontSize: 15,color:'#008fff',fontWeight:'700' }}>Eligibilty Criteria:</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
    <View style={{ flexDirection: 'column',flex:2, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 14, color: 'grey' }}>Age</Text>
      <Text style={{color:'grey'}}>{props.age} </Text>
    </View>
    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 14, color: 'grey' }}>Qualification</Text>
    <Text  style={{color:'grey'}}>{props.qualification}</Text>
    </View>
    <View style={{ flexDirection: 'column', flex: 2, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 14, color: 'grey' }}>Marital</Text>
    <Text  style={{color:'grey'}}>{props.married}</Text>
    </View>
  </View>
  <View style={{flexDirection:'row'}}>
  <Text style={{ fontSize: 15,color:props.colorCutoff,fontWeight:'700' }}>Cutoff Last Year:</Text>
    <Text  style={{color:'grey'}}> {props.cutoff}</Text>
    </View>
        </View>
      </View>)
}

export default DataCard;