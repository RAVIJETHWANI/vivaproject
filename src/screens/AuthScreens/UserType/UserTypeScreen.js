import React, { useEffect, useState } from "react";
import {  Text, View, TouchableOpacity, ImageBackground, Platform , } from "react-native";
import {REGISTER_SCREEN } from '../../../constants/navgiationStrings';
import Icon from '../../../components/Icon/icons';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default UserTypeScreen = ({navigation}) => {
    const handleRedirect = async(user) => {
    await AsyncStorage.setItem('user_type', user);
    navigation.navigate(REGISTER_SCREEN)
    }
    return (
        <ImageBackground source={require('../../../assets/images/background.jpg')} resizeMode="cover" style={{
            flex: 1, 
            justifyContent: "center"
        }}>
            <View style={styles.wrapper}>
            <View style={styles.box}>
            <TouchableOpacity style={styles.dropBox} onPress={() => {
                            handleRedirect('STUDENT')
                        }}>
                        <Text style={styles.dropBoxText}>Students</Text>
                           
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.dropBox} onPress={() => {
                            handleRedirect('EMPLOYEE')
                        }}>
                        <Text style={styles.dropBoxText}>Employee</Text>
                           
                        </TouchableOpacity>
                        </View>

            </View>
        </ImageBackground>
  
     
    );
  };
  