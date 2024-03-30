import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { initialFishes } from "../../assets/initialFIshes";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const totalGuessCount = incorrectCount + correctCount;
  const fishNames = initialFishes
    .map((fish) => fish.name)
    .slice(totalGuessCount);
  const gameOver = totalGuessCount == initialFishes.length;

  return (
    <>
      {!gameOver && (
        <>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            answersLeft={fishNames}
          />
          <FunctionalGameBoard
            fishData={initialFishes[totalGuessCount]}
            setCorrectCount={setCorrectCount}
            setIncorrectCount={setIncorrectCount}
          />
        </>
      )}
      {gameOver && (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={totalGuessCount}
        />
      )}
    </>
  );
}
