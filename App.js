import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameOver from "./screens/GameOver";
import GameScreen from "./screens/GameScreen";
import StartScreen from "./screens/StartScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  function handleStartGame(selectedNumber) {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  function handleGameOver(rounds) {
    setGuessRounds(rounds);
  }

  let content = <StartScreen onStartGame={handleStartGame} />;
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={handleGameOver} />
    );
  } else if (guessRounds > 0) {
    content = <GameOver />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
