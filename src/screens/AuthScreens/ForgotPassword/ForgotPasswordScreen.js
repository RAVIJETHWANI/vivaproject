import React,{useState,useEffect} from 'react';

import {View,ScrollView} from 'react-native'
import {Text,input} from 'react-native-elements'
import styles from './styles';
import AvatarBox from '../../../components/AvatarBox/Avatar';
import { useIsFocused } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import TextErrorMessage from '../../../components/ErrorMessage/Error';
import LinearGradient from 'react-native-linear-gradient' 
import {FORGOT_PASSWORD } from '../../../constants/navgiationStrings';

const ForgotPasswordScreen=()=>{
    return(
        <View>
            <Text>
                forgot
            </Text>
        </View>
    )
}

export default ForgotPasswordScreen