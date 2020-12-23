import { useState } from "react";
import styled from "styled-components";
import TicTacToeSquare from "./components/tic-tac-toe-square.component";

export type Turn = "X" | "O";

export type TicTacToeSquareProps = {
  turn: Turn;
  setTurn: React.Dispatch<React.SetStateAction<Turn>>;
  possiblePositions: PossiblePosition[];
  firstRow?: [] | Turn[];
  setFirstRow?: React.Dispatch<React.SetStateAction<[] | Turn[]>>;
  secondRow?: [] | Turn[];
  setSecondRow?: React.Dispatch<React.SetStateAction<[] | Turn[]>>;
  thirdRow?: [] | Turn[];
  setThirdRow?: React.Dispatch<React.SetStateAction<[] | Turn[]>>;
  firstColumn?: [] | Turn[];
  setFirstColumn?: React.Dispatch<React.SetStateAction<[] | Turn[]>>;
  secondColumn?: [] | Turn[];
  setSecondColumn?: React.Dispatch<React.SetStateAction<[] | Turn[]>>;
  thirdColumn?: [] | Turn[];
  setThirdColumn?: React.Dispatch<React.SetStateAction<[] | Turn[]>>;
  firstDiagonal?: [] | Turn[];
  setFirstDiagonal?: React.Dispatch<React.SetStateAction<[] | Turn[]>>;
  secondDiagonal?: [] | Turn[];
  setSecondDiagonal?: React.Dispatch<React.SetStateAction<[] | Turn[]>>;
};

type PossiblePosition =
  | "firstRow"
  | "secondRow"
  | "thirdRow"
  | "firstColumn"
  | "secondColumn"
  | "thirdColumn"
  | "firstDiagonal"
  | "secondDiagonal";

const TicTacToe: React.FC = () => {
  const [turn, setTurn] = useState<Turn>("X");
  const [firstRow, setFirstRow] = useState<Turn[] | []>([]);
  const [secondRow, setSecondRow] = useState<Turn[] | []>([]);
  const [thirdRow, setThirdRow] = useState<Turn[] | []>([]);
  const [firstColumn, setFirstColumn] = useState<Turn[] | []>([]);
  const [secondColumn, setSecondColumn] = useState<Turn[] | []>([]);
  const [thirdColumn, setThirdColumn] = useState<Turn[] | []>([]);
  const [firstDiagonal, setFirstDiagonal] = useState<Turn[] | []>([]);
  const [secondDiagonal, setSecondDiagonal] = useState<Turn[] | []>([]);

  const changeTurn = {
    turn,
    setTurn,
  };

  const firstRowProps = {
    firstRow,
    setFirstRow,
  };

  const secondRowProps = {
    secondRow,
    setSecondRow,
  };

  const thirdRowProps = {
    thirdRow,
    setThirdRow,
  };

  const firstColumnProps = {
    firstColumn,
    setFirstColumn,
  };

  const secondColumnProps = {
    secondColumn,
    setSecondColumn,
  };

  const thirdColumnProps = {
    thirdColumn,
    setThirdColumn,
  };

  const firstDiagonalProps = {
    firstDiagonal,
    setFirstDiagonal,
  };

  const secondDiagonalProps = {
    secondDiagonal,
    setSecondDiagonal,
  };

  const ticTacToeSquaresProps: TicTacToeSquareProps[] = [
    {
      possiblePositions: ["firstRow", "firstColumn", "firstDiagonal"],
      ...changeTurn,
      ...firstRowProps,
      ...firstColumnProps,
      ...firstDiagonalProps,
    },
    {
      possiblePositions: ["firstRow", "secondColumn"],
      ...changeTurn,
      ...firstRowProps,
      ...secondColumnProps,
    },
    {
      possiblePositions: ["firstRow", "thirdColumn", "secondDiagonal"],
      ...changeTurn,
      ...firstRowProps,
      ...thirdColumnProps,
      ...secondDiagonalProps,
    },
    {
      possiblePositions: ["secondRow", "firstColumn"],
      ...changeTurn,
      ...secondRowProps,
      ...firstColumnProps,
    },
    {
      possiblePositions: [
        "secondRow",
        "secondColumn",
        "firstDiagonal",
        "secondDiagonal",
      ],
      ...changeTurn,
      ...secondRowProps,
      ...secondColumnProps,
      ...firstDiagonalProps,
      ...secondDiagonalProps,
    },
    {
      possiblePositions: ["secondRow", "thirdColumn"],
      ...changeTurn,
      ...secondRowProps,
      ...thirdColumnProps,
    },
    {
      possiblePositions: ["thirdRow", "firstColumn", "secondDiagonal"],
      ...changeTurn,
      ...thirdRowProps,
      ...firstColumnProps,
      ...secondDiagonalProps,
    },
    {
      possiblePositions: ["thirdRow", "secondColumn"],
      ...changeTurn,
      ...thirdRowProps,
      ...secondColumnProps,
    },
    {
      possiblePositions: ["thirdRow", "thirdColumn", "firstDiagonal"],
      ...changeTurn,
      ...thirdRowProps,
      ...thirdColumnProps,
      ...firstDiagonalProps,
    },
  ];

  console.log("firstRow", firstRow);
  console.log("secondRow", secondRow);
  console.log("thirdRow", thirdRow);
  console.log("firstColumn", firstColumn);
  console.log("secondColumn", secondColumn);
  console.log("thirdColumn", thirdColumn);
  console.log("firstDiagonal", firstDiagonal);
  console.log("secondDiagonal", secondDiagonal);

  return (
    <TicTacToeWrapper>
      <TicTacToeArea>
        {ticTacToeSquaresProps.map((ticTacToeSquareProps, index) => (
          <TicTacToeSquare key={index} {...ticTacToeSquareProps} />
        ))}
      </TicTacToeArea>
    </TicTacToeWrapper>
  );
};

const TicTacToeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const TicTacToeArea = styled.div`
  max-width: 500px;
  min-height: 500px;
  width: 100%;
  border: 1px solid black;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  box-sizing: border-box;
`;

export default TicTacToe;
