import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../../assets/initialFIshes";
import { TCounts } from "../../types";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  handleAnswer = (answer: string) => {
    const currentIndex = this.state.correctCount + this.state.incorrectCount;
    this.setState((prevState: TCounts) => {
      const isCorrect =
        answer.toLowerCase() === initialFishes[currentIndex].name.toLowerCase();
      if (isCorrect) {
        return { correctCount: prevState.correctCount + 1 };
      } else {
        return { incorrectCount: prevState.incorrectCount + 1 };
      }
    });
  };

  render() {
    const totalGuessCount = this.state.correctCount + this.state.incorrectCount;
    const fishData = initialFishes
      .map((fish) => fish.name)
      .slice(totalGuessCount);
    const gameOver = totalGuessCount == initialFishes.length;
    return (
      <>
        {!gameOver && (
          <>
            <ClassScoreBoard
              correctCount={this.state.correctCount}
              incorrectCount={this.state.incorrectCount}
              answersLeft={fishData}
            />
            <ClassGameBoard
              handleAnswer={this.handleAnswer}
              fishData={initialFishes[totalGuessCount]}
            />
          </>
        )}
        {gameOver && (
          <ClassFinalScore
            correctCount={this.state.correctCount}
            totalCount={totalGuessCount}
          />
        )}
      </>
    );
  }
}
