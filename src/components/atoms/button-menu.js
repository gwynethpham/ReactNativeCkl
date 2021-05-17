import React, {useState} from 'react';
import {View, Animated, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native'

const ButtonMenu = () => {
  const [activated, setActivated] = useState(false)
  const [animation, setAnimation] = useState(new Animated.Value(0))
  const [rotation, setRotation] = useState(new Animated.Value(0))

  const startAnimation = () => {
    const toValue = activated ? 0 : 1

    setActivated(!activated)
    Animated.parallel([
      Animated.timing(animation, {
        toValue,
        duration: 300,
        useNativeDriver : false
      }),
      Animated.spring(rotation, {
        toValue,
        friction: 2,
        tension: 140,
        useNativeDriver : false
      })
    ]).start()
  }

  const animatedStyles = {
    lower: {
      transform: [
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -25]
          })
        },
        {
          rotate: rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg']
          })
        }
      ]
    },
    upper: {
      transform: [
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 25]
          })
        },
        {
          rotate: rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-45deg']
          })
        }
      ]
    },
    middle: {
      height: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [10, 0]
      })
    },
    burgerButton: {
      backgroundColor: animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['green', 'red']
      })
    }
  }
  return (
    <View style={styles.container}>
    <TouchableWithoutFeedback onPress={startAnimation}>
      <Animated.View
        style={[styles.burgerButton, animatedStyles.burgerButton]}
      >
        <Animated.View style={[styles.inner, animatedStyles.upper]} />
        <Animated.View style={[styles.inner, animatedStyles.middle]} />
        <Animated.View style={[styles.inner, animatedStyles.lower]} />
      </Animated.View>
    </TouchableWithoutFeedback>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    burgerButton: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 100,
      height: 100,
      paddingVertical: 20,
      borderRadius: 50,
      backgroundColor: 'green'
    },
    inner: {
      width: '60%',
      height: 10,
      borderRadius: 10,
      backgroundColor: 'black'
    }
})

export default ButtonMenu;