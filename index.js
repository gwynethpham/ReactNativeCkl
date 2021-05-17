/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
if(__DEV__){
    //config reactotron
    
}
AppRegistry.registerComponent(appName, () => App);
