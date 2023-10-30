import React from 'react';
import AppBody from './App/AppBody';
import { StatusBar , View } from "react-native";

const App = () : JSX.Element =>

  <View style = { { flex: 1 } } >
    
    <AppBody />
    <StatusBar hidden = { true } />
    
  </View>


export default App