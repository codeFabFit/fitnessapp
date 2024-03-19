import { View, Text, Image, StyleSheet, TouchableOpacity, navigate } from 'react-native'
import React, { Component } from 'react'
import Color from '../../Shared/Color'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import LoginScreen from './LoginScreen';
import SignUp from './SignUp';

export default function Login() {

   
  return (
    <View style={{flex: 1, alignItems:'center', justifyContent: 'flex-start', marginTop: 20, paddingTop: 40}}>
                {/* inline styling  */}
            {/* needed to make the view of the entire page different in order to center the banner at the top */}
            <Image source={require('../image/loginBanner.png')}
                style={{ width: 400, height: 300, resizeMode: 'contain' }}
            />
            
            <Text style={styles.welcomeText}>Welcome to FabFitForever App</Text>
            <Text style={{textAlign: 'center', marginTop: 40, fontSize: 20}}>Login/SignUp</Text>
            {/* creating a new view for bottom */}

        <TouchableOpacity 
            // UI Element ** changing VIEW to TouchableOpacity and now adding functionailty 
            style={styles.botton} onPress={LoginScreen}>

            <AntDesign name="login" size={24} color="white"  style={{marginRight: 10}} />
                <Text style={{color:Color.white}}>Log In with Google</Text>
                {/* adding google icon from icons.expo.fyi */}
                
            </TouchableOpacity>
        <TouchableOpacity 
            // UI Element ** changing VIEW to TouchableOpacity and now adding functionailty 
            style={styles.botton} onPress={SignUp} >
            <AntDesign name="rightcircle" size={24} color="white"  style={{marginRight: 10}} 
            />
                <Text style={{color:Color.white}}>Sign Up</Text>
                {/* adding google icon from icons.expo.fyi */}
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create ({

    welcomeText: {
        fontSize: 35, textAlign: 'center', fontWeight: 'bold',
    },
    botton: {
        backgroundColor:Color.primary, padding: 10, margin: 30, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 10,
        
    }
})


