import Reactotron from 'reactotron-react-native';

Reactotron
  .configure({
    name: 'React Native Demo',
  })
  .useReactNative()
  .connect();

console.log = Reactotron.log