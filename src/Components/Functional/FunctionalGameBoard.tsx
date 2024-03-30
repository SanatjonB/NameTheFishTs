import { TFishData } from "../../types";
import "./styles/game-board.css";
import { useCallback, useState } from "react";

export function FunctionalGameBoard({
  fishData,
  setCorrectCount,
  setIncorrectCount,
}: {
  fishData: TFishData;
  setCorrectCount: (updateFn: (prevState: number) => number) => void;
  setIncorrectCount: (updateFn: (prevState: number) => number) => void;
}) {
  const [fishGuess, setFishGuess] = useState("");

  const handleAnswer = useCallback(
    (answer: string) => {
      if (fishData.name.toLowerCase() === answer.toLowerCase()) {
        setCorrectCount((curState) => curState + 1);
      } else {
        setIncorrectCount((curState) => curState + 1);
      }
    },
    [fishData.name, setCorrectCount, setIncorrectCount]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleAnswer(fishGuess);
      setFishGuess("");
    },
    [fishGuess, handleAnswer]
  );
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishData.url} alt={fishData.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          id="fish-guess"
          name="fish-guess"
          onChange={(e) => setFishGuess(e.target.value)}
          value={fishGuess}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
