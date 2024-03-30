import { Component } from "react";
import "./styles/game-board.css";
import { TFishData } from "../../types";

type TClassGameBoard = {
  fishData: TFishData;
  handleAnswer: (answer: string) => void;
};

export class ClassGameBoard extends Component<TClassGameBoard> {
  state = {
    fishGuess: "",
  };
  render() {
    const { fishData, handleAnswer } = this.props;
    const { fishGuess } = this.state;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleAnswer(fishGuess);
      this.setState({ fishGuess: "" });
    };

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={fishData.url} alt={fishData.name} />
        </div>
        <form id="fish-guess-form" onSubmit={handleSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            onChange={(event) => {
              this.setState({ fishGuess: event.target.value });
            }}
            value={fishGuess}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
