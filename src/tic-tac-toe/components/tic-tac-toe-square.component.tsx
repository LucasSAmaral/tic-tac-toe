import { useState } from "react";
import styled, { css } from "styled-components";
import {
  PossiblePosition,
  TicTacToeSquareProps,
  Turn,
} from "../tic-tac-toe.container";

type ClickHandlerObjectParam = {
  choosenCharacter: Turn | "";
  setChoosenCharacter: React.Dispatch<React.SetStateAction<Turn | "">>;
  TicTacToeProps: TicTacToeSquareProps;
};

const setPositionHandler = (TicTacToeProps: TicTacToeSquareProps) => {
  if (TicTacToeProps.setFirstRow && TicTacToeProps.firstRow) {
    TicTacToeProps.setFirstRow([
      ...TicTacToeProps.firstRow,
      TicTacToeProps.turn,
    ]);
  }

  if (TicTacToeProps.setSecondRow && TicTacToeProps.secondRow) {
    TicTacToeProps.setSecondRow([
      ...TicTacToeProps.secondRow,
      TicTacToeProps.turn,
    ]);
  }

  if (TicTacToeProps.setThirdRow && TicTacToeProps.thirdRow) {
    TicTacToeProps.setThirdRow([
      ...TicTacToeProps.thirdRow,
      TicTacToeProps.turn,
    ]);
  }

  if (TicTacToeProps.setFirstColumn && TicTacToeProps.firstColumn) {
    TicTacToeProps.setFirstColumn([
      ...TicTacToeProps.firstColumn,
      TicTacToeProps.turn,
    ]);
  }

  if (TicTacToeProps.setSecondColumn && TicTacToeProps.secondColumn) {
    TicTacToeProps.setSecondColumn([
      ...TicTacToeProps.secondColumn,
      TicTacToeProps.turn,
    ]);
  }

  if (TicTacToeProps.setThirdColumn && TicTacToeProps.thirdColumn) {
    TicTacToeProps.setThirdColumn([
      ...TicTacToeProps.thirdColumn,
      TicTacToeProps.turn,
    ]);
  }

  if (TicTacToeProps.setFirstDiagonal && TicTacToeProps.firstDiagonal) {
    TicTacToeProps.setFirstDiagonal([
      ...TicTacToeProps.firstDiagonal,
      TicTacToeProps.turn,
    ]);
  }

  if (TicTacToeProps.setSecondDiagonal && TicTacToeProps.secondDiagonal) {
    TicTacToeProps.setSecondDiagonal([
      ...TicTacToeProps.secondDiagonal,
      TicTacToeProps.turn,
    ]);
  }
};

const clickHandler = ({
  choosenCharacter,
  setChoosenCharacter,
  TicTacToeProps,
}: ClickHandlerObjectParam) => {
  if (choosenCharacter === "") {
    if (TicTacToeProps.turn === "X") {
      setChoosenCharacter("X");
      TicTacToeProps.setTurn("O");
    } else {
      setChoosenCharacter("O");
      TicTacToeProps.setTurn("X");
    }
    setPositionHandler(TicTacToeProps);
  }
};

const TicTacToeSquare: React.FC<TicTacToeSquareProps> = ({
  ...TicTacToeProps
}) => {
  const [choosenCharacter, setChoosenCharacter] = useState<Turn | "">("");
  const clickHandlerParams = {
    choosenCharacter,
    setChoosenCharacter,
    TicTacToeProps,
  };
  return (
    <TicTacToeOptionWrapper
      allTheSameCharacter={TicTacToeProps.allTheSameCharacter}
      possiblePositions={TicTacToeProps.possiblePositions}
      onClick={() =>
        TicTacToeProps.allTheSameCharacter === "" &&
        clickHandler(clickHandlerParams)
      }
    >
      <h2>{choosenCharacter}</h2>
    </TicTacToeOptionWrapper>
  );
};

const TicTacToeOptionWrapper = styled.div<{
  allTheSameCharacter: PossiblePosition | "";
  possiblePositions: PossiblePosition[];
}>`
  cursor: pointer;
  border: 1px solid black;
  display: flex;
  align-items: center;
  height: 166px;

  ${({ allTheSameCharacter, possiblePositions }) =>
    allTheSameCharacter && possiblePositions.includes(allTheSameCharacter)
      ? css`
          background-color: green;
          color: white;
        `
      : ""}

  h2 {
    text-align: center;
    margin: 0 auto;
    font-size: 70px;
  }
`;

export default TicTacToeSquare;
