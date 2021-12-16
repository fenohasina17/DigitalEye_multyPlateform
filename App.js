import { StatusBar } from 'expo-status-bar';
import React, {useState,useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RootStack from './navigators/RootStack';

import AppLoading from 'expo-app-loading';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { CredentialsContext } from './components/CredentialsContext';

export default function App() {
  
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState("");

  const checkLoginCredentials = () => {
    AsyncStorage
    .getItem('digitalEyeCredentials')
    .then((result) => {
      if(result !== null){
        setStoredCredentials(JSON.parse(result));
      }else{
        setStoredCredentials(null);
      }
    })
    .catch(error => console.error())
  }
  
  if (!appReady) {
    return (
      <AppLoading 
        startAsync={checkLoginCredentials}
        onFinish={() => setAppReady(true)}
        onError={console.warn }
      />
    )
  }

  return (
    <CredentialsContext.Provider value={{storedCredentials,setStoredCredentials}}  >
      <RootStack />
    </CredentialsContext.Provider>
     
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
