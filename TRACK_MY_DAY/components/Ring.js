import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import{ VictoryPie, VictoryContainer } from 'victory-native';


export default function Ring() {

    let pieData = [
        { x: 1, y: 1, label: "Sleep" },
        { x: 2, y: 1, label: "Water" },
        { x: 3, y: 1, label: "Steps" }
    ]

    let colorData = ["tomato", "gold", "navy"]




    // let dataImages = [
    //     <Image source={require('../assets/clock.png')} style={styles.image}></Image>,
    //     <Image source={require('../assets/glassOfWater.png')} style={styles.image}></Image>,
    //     <Image source={require('../assets/footprint.png')} style={styles.image}></Image>
    // ]





    return (
        <View>
            <VictoryPie
            data={pieData}           
            colorScale={colorData}
            innerRadius={90}
            radius={({ datum, active }) => (active ? 150 : 140)}
            
            
            
            
            // labelComponent={}




            events={[
                {
                  target: "data",
                  eventHandlers: {
                    onPressIn: () => {
                        return [{
                            eventKey: "all",
                            mutation: () => ({ active: false })
                            },

                            {
                            mutation: () => ({ active: true })
                            }
                        ];
                        }
                   }
                }
              ]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        width: 250,
        height: 250,
        resizeMode: 'contain'
    }
})