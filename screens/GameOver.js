import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function GameOver(props) {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over</Text>
      <Text>Number of rounds: {props.guessRounds}</Text>
      <Text>The number was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onNewGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
