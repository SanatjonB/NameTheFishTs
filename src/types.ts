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
export type ScoreBoardProps = {
  correctCount: number;
  incorrectCount: number;
  answersLeft: string[];
};
