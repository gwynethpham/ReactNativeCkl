import React from 'react';
import {SafeAreaView, Text, TouchableHighlight, View} from 'react-native';
import {Typography} from '_styles'
import {ButtonMenu} from '_atoms';

const HomeScreen = ({navigation}) => {
    // console.log('_atoms', ButtonMenu)
    return(
        <SafeAreaView style={{flex :1}}>
            <View style={{flexDirection: 'row', alignContent : 'center'}}>
                <ButtonMenu/>
                <Text>Home</Text>
            </View>
            
        </SafeAreaView>
    )
};

export default HomeScreen;