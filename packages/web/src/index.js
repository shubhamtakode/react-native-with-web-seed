import {AppRegistry} from 'react-native'
import App from './App';
import React from "react";

AppRegistry.registerComponent('react-native-with-web-seed', () => App);
AppRegistry.runApplication('react-native-with-web-seed', {
    rootTag: document.getElementById('root'),
});
