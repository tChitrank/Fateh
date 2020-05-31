import React from 'react'
import PureChart from 'react-native-pure-chart';
import { View, Dimensions, Text } from 'react-native'

const BarChartLegends = props => {
    return (
        <View style={{ flexDirection: "column" }}>
            <View style={{ borderColor: "grey" }}>
                <View style={{ flexDirection: "row" }}>
                    <PureChart type={'bar'}
                        data={props.dataWithLabel}
                        width={'100%'}
                        showEvenNumberXaxisLabel={false}
                        height={200}
                        customValueRenderer={(index, point) => {
                            if (index % 2 === 0) return null
                            return (
                                <Text style={{ textAlign: 'center' }}>{point.y}</Text>
                            )
                        }} />
                    
                </View>
                <View style={{ flexDirection: "row", alignSelf: "center",marginTop:8 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ alignSelf: "center", marginLeft: 3, width: 10, height: 10, borderRadius: 100 / 2, backgroundColor: props.legcolor1 }} />
                    <View><Text style={{marginLeft:5}}>{props.legone}</Text></View></View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ alignSelf: "center", marginLeft: 8, width: 10, height: 10, borderRadius: 100 / 2, backgroundColor: props.legcolor2 }} />
                            <View><Text style={{marginLeft:5}}>{props.legtwo}</Text></View></View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ alignSelf: "center", marginLeft: 8, width: 10, height: 10, borderRadius: 100 / 2, backgroundColor: props.legcolor3 }} />
                            <View><Text style={{marginLeft:5}}>{props.legthree}</Text></View></View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ alignSelf: "center", marginLeft: 8, width: 10, height: 10, borderRadius: 100 / 2, backgroundColor: props.legcolor4 }} />
                            <View><Text style={{marginLeft:5}}>{props.legfour}</Text></View></View>
                    </View>
                <View style={{ flexDirection: "row", alignSelf: "center" ,marginTop:5}}>
                    <View style={{ marginLeft: 5, width: 10, height: 10, borderRadius: 100 / 2, backgroundColor: props.color1 }} />
                    <View style={{ marginLeft: 5, width: 10, height: 10, borderRadius: 100 / 2, backgroundColor: props.color2 }} />
                    <View style={{ marginLeft: 5, width: 10, height: 10, borderRadius: 100 / 2, backgroundColor: props.color3 }} />
                    <View style={{ marginLeft: 5, width: 10, height: 10, borderRadius: 100 / 2, backgroundColor: props.color4 }} />
                    <View style={{ marginLeft: 5, width: 10, height: 10, borderRadius: 100 / 2, backgroundColor: props.color5 }} />
                </View>
            </View>
        </View>

    )
}

export default BarChartLegends;