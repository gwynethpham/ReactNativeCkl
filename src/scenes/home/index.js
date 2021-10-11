import React from 'react';
import {SafeAreaView, Text, TouchableHighlight, View} from 'react-native';
import {Typography} from '_styles'
import {ButtonMenu} from '_atoms';
import Config from 'react-native-config';

const HomeScreen = ({navigation}) => {
    // console.log('_atoms', ButtonMenu)
    return(
        <SafeAreaView style={{flex :1}}>
            <View style={{flexDirection: 'row', alignContent : 'center'}}>
                <ButtonMenu/>
                <Text>Home</Text>
                <Text>{Config.API_URL}</Text>
                <Text>{Config.APP_NAME}</Text>
            </View>
            
        </SafeAreaView>
    )
};

export default HomeScreen;