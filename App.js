import React, { Coomponent } from 'react';
import { View, StyleSheet } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import GetLatLong from './src/components/getLatLong';
import SetAnnotation from './src/components/setAnnotation';

MapboxGL.setAccessToken('pk.eyJ1Ijoib3RuaWVsdHVybmlwIiwiYSI6ImNrMWJneWlwMDAzMnYzaXBtN3AzOXlxOWsifQ.Sal3nZuZKw41lPRIyiIiEw');
const App = () => 
  <SetAnnotation/>
export default App;