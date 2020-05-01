import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import DefaultStyles from '../constants/default-styles'
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';


const image = '../assets/original.png'

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>The Game is Over!</Text>
      <View style={styles.imgContainer}>
        <Image
          source={require(image)}
          style={styles.img}
          resizeMode='cover' />
      </View>
      <Text style={{...DefaultStyles.bodyText, ...styles.textContainer}}>
        Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the right number <Text style={styles.highlight}>{props.userNumber}</Text>
      </Text>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: '100%',
    height: '100%',
  },
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    marginVertical: 20
  },
  highlight: {
    color : Colors.primary,
    fontSize: 21,
    fontFamily: 'open-sans-bold'
  },
  textContainer: {
    paddingHorizontal: 30,
    textAlign: 'center',
    marginVertical: 15,
    fontSize: 20
  },
});

export default GameOverScreen;
