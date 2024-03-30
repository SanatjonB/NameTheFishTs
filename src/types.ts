export type TCounts = {
  incorrectCount: number;
  correctCount: number;
};

export type TFishData = {
  url: string;
  name: string;
};

export type TFinalScore = {
  correctCount: number;
  totalCount: number;
};
export type TScoreBoard = {
  correctCount: number;
  incorrectCount: number;
  answersLeft: string[];
};
export type TClassGameBoard = {
  fishData: TFishData;
  handleAnswer: (answer: string) => void;
};
