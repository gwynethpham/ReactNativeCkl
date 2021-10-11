import Reactotron from 'reactotron-react-native';
import {NativeModules} from 'react-native';
const scriptURL = NativeModules.SourceCode.scriptURL;
const scriptHostname = scriptURL.split('://')[1].split(':')[0];

Reactotron
  .configure({
    host: scriptHostname,
    name: 'React Native Demo',
  })
  .useReactNative()
  .connect();

console.log = Reactotron.log;
console.disableYellowBox = true;
