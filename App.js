import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameOver from "./screens/GameOver";
import GameScreen from "./screens/GameScreen";
import StartScreen from "./screens/StartScreen";

function fetchFonts() {
  return Font.loadAsync({
    "fira-code": require("./assets/fonts/FiraCode-Regular.ttf"),
    "fira-code-bold": require("./assets/fonts/FiraCode-Bold.ttf")
  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoader] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoader(true)}
        onError={err => console.log(err)}
      />
    );
  }

  function configureNewGame() {
    setGuessRounds(0);
    setUserNumber(null);
  }

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
    content = (
      <GameOver
        guessRounds={guessRounds}
        userNumber={userNumber}
        onNewGame={configureNewGame}
      />
    );
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
