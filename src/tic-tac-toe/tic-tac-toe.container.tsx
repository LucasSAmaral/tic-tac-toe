import { useState } from "react";
import styled from "styled-components";
import TicTacToeOption from "./components/tic-tac-toe-option.component";

export type Turn = "X" | "O";

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

  const ticTacToeOptions = [
    {
      turn,
      setTurn,
      firstRow,
      setFirstRow,
      firstColumn,
      setFirstColumn,
      firstDiagonal,
      setFirstDiagonal,
    },
    {
      turn,
      setTurn,
      firstRow,
      setFirstRow,
      secondColumn,
      setSecondColumn,
    },
    {
      turn,
      setTurn,
      firstRow,
      setFirstRow,
      thirdColumn,
      setThirdColumn,
      secondDiagonal,
      setSecondDiagonal,
    },
    {
      turn,
      setTurn,
      secondRow,
      setSecondRow,
      firstColumn,
      setFirstColumn,
    },
    {
      turn,
      setTurn,
      secondRow,
      setSecondRow,
      secondColumn,
      setSecondColumn,
      firstDiagonal,
      setFirstDiagonal,
      secondDiagonal,
      setSecondDiagonal,
    },
    {
      turn,
      setTurn,
      secondRow,
      setSecondRow,
      thirdColumn,
      setThirdColumn,
    },
    {
      turn,
      setTurn,
      thirdRow,
      setThirdRow,
      firstColumn,
      setFirstColumn,
      secondDiagonal,
      setSecondDiagonal,
    },
    {
      turn,
      setTurn,
      thirdRow,
      setThirdRow,
      secondColumn,
      setSecondColumn,
    },
    {
      turn,
      setTurn,
      thirdRow,
      setThirdRow,
      thirdColumn,
      setThirdColumn,
      firstDiagonal,
      setFirstDiagonal,
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
        {ticTacToeOptions.map((ticTacToeOption, index) => (
          <TicTacToeOption key={index} {...ticTacToeOption} />
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
