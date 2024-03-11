import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={{flex: 1, alignItems:'center', justifyContent: 'flex-start', marginTop: 20}}>
     {/* needed to make the view of the entire page different in order to center the banner at the top */}
     <Image
        source={require('../image/loginBanner.png')}
        style={{ width: 400, height: 300, resizeMode: 'contain' }}
      />
      <Text>Login/SignIn</Text>
    </View>
  )
}


