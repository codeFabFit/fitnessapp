//web 1020069826703-fktpdrfkrtnronkbe0tqpubjt5sr5kpk.apps.googleusercontent.com
// ios 1020069826703-63rhf689b666j7su759ab5kjnmsfa14g.apps.googleusercontent.com
// andriod 


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, KeyboardAvoidingView, AsyncStorage, View , SafeAreaView} from 'react-native';
import Login from './App/Assets/Pages/Login';
import LoginScreen from './App/Assets/Pages/LoginScreen';
import SignUp from './App/Assets/Pages/SignUp';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'
// import { createStackNavigator} from '@react-navigation/stack'




export default function App() {
  return (
   
      <View style={styles.container}>
      
      <Login/>
       
      </View>
    
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// use toshow if your logged in or not

 {/* <SafeAreaView style={{padding: 10}}>
      <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
        <Text>You are Signed out</Text>
        </SignedOut>
      <StatusBar style="auto" />
      </SafeAreaView> */}