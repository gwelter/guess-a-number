import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import DefaultStyles from "../constants/defaultStyles";

export default function GameOver(props) {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.bodyText}>The Game is Over</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <Text style={DefaultStyles.bodyText}>
        Number of rounds: {props.guessRounds}
      </Text>
      <Text style={DefaultStyles.bodyText}>
        The number was: {props.userNumber}
      </Text>
      <Button title="NEW GAME" onPress={props.onNewGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden"
  },
  image: {
    height: "100%",
    width: "100$"
  }
});
